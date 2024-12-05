# `dataOciServiceCatalogPrivateApplicationPackage` Submodule <a name="`dataOciServiceCatalogPrivateApplicationPackage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogPrivateApplicationPackage <a name="DataOciServiceCatalogPrivateApplicationPackage" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_package oci_service_catalog_private_application_package}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackage } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage(scope: Construct, id: string, config: DataOciServiceCatalogPrivateApplicationPackageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig">DataOciServiceCatalogPrivateApplicationPackageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig">DataOciServiceCatalogPrivateApplicationPackageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplicationPackage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isConstruct"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackage } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformElement"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackage } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformDataSource"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackage } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackage } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplicationPackage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceCatalogPrivateApplicationPackage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceCatalogPrivateApplicationPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogPrivateApplicationPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.contentUrl">contentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.packageType">packageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.privateApplicationId">privateApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.privateApplicationPackageIdInput">privateApplicationPackageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.privateApplicationPackageId">privateApplicationPackageId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `contentUrl`<sup>Required</sup> <a name="contentUrl" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.contentUrl"></a>

```typescript
public readonly contentUrl: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.packageType"></a>

```typescript
public readonly packageType: string;
```

- *Type:* string

---

##### `privateApplicationId`<sup>Required</sup> <a name="privateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.privateApplicationId"></a>

```typescript
public readonly privateApplicationId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateApplicationPackageIdInput`<sup>Optional</sup> <a name="privateApplicationPackageIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.privateApplicationPackageIdInput"></a>

```typescript
public readonly privateApplicationPackageIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateApplicationPackageId`<sup>Required</sup> <a name="privateApplicationPackageId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.privateApplicationPackageId"></a>

```typescript
public readonly privateApplicationPackageId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogPrivateApplicationPackageConfig <a name="DataOciServiceCatalogPrivateApplicationPackageConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackage } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogPrivateApplicationPackageConfig: dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.privateApplicationPackageId">privateApplicationPackageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_package#private_application_package_id DataOciServiceCatalogPrivateApplicationPackage#private_application_package_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_package#id DataOciServiceCatalogPrivateApplicationPackage#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `privateApplicationPackageId`<sup>Required</sup> <a name="privateApplicationPackageId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.privateApplicationPackageId"></a>

```typescript
public readonly privateApplicationPackageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_package#private_application_package_id DataOciServiceCatalogPrivateApplicationPackage#private_application_package_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_package#id DataOciServiceCatalogPrivateApplicationPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



