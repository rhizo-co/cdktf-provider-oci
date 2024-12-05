# `dataOciServiceCatalogPrivateApplication` Submodule <a name="`dataOciServiceCatalogPrivateApplication` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogPrivateApplication <a name="DataOciServiceCatalogPrivateApplication" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application oci_service_catalog_private_application}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplication } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication(scope: Construct, id: string, config: DataOciServiceCatalogPrivateApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig">DataOciServiceCatalogPrivateApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig">DataOciServiceCatalogPrivateApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.isConstruct"></a>

```typescript
import { dataOciServiceCatalogPrivateApplication } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.isTerraformElement"></a>

```typescript
import { dataOciServiceCatalogPrivateApplication } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.isTerraformDataSource"></a>

```typescript
import { dataOciServiceCatalogPrivateApplication } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.generateConfigForImport"></a>

```typescript
import { dataOciServiceCatalogPrivateApplication } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceCatalogPrivateApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceCatalogPrivateApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogPrivateApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.logo">logo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList">DataOciServiceCatalogPrivateApplicationLogoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.logoFileBase64Encoded">logoFileBase64Encoded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.longDescription">longDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.packageDetails">packageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList">DataOciServiceCatalogPrivateApplicationPackageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.packageType">packageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.shortDescription">shortDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.privateApplicationIdInput">privateApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.privateApplicationId">privateApplicationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.logo"></a>

```typescript
public readonly logo: DataOciServiceCatalogPrivateApplicationLogoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList">DataOciServiceCatalogPrivateApplicationLogoList</a>

---

##### `logoFileBase64Encoded`<sup>Required</sup> <a name="logoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.logoFileBase64Encoded"></a>

```typescript
public readonly logoFileBase64Encoded: string;
```

- *Type:* string

---

##### `longDescription`<sup>Required</sup> <a name="longDescription" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.longDescription"></a>

```typescript
public readonly longDescription: string;
```

- *Type:* string

---

##### `packageDetails`<sup>Required</sup> <a name="packageDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.packageDetails"></a>

```typescript
public readonly packageDetails: DataOciServiceCatalogPrivateApplicationPackageDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList">DataOciServiceCatalogPrivateApplicationPackageDetailsList</a>

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.packageType"></a>

```typescript
public readonly packageType: string;
```

- *Type:* string

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.shortDescription"></a>

```typescript
public readonly shortDescription: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `privateApplicationIdInput`<sup>Optional</sup> <a name="privateApplicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.privateApplicationIdInput"></a>

```typescript
public readonly privateApplicationIdInput: string;
```

- *Type:* string

---

##### `privateApplicationId`<sup>Required</sup> <a name="privateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.privateApplicationId"></a>

```typescript
public readonly privateApplicationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogPrivateApplicationConfig <a name="DataOciServiceCatalogPrivateApplicationConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplication } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogPrivateApplicationConfig: dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.privateApplicationId">privateApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application#private_application_id DataOciServiceCatalogPrivateApplication#private_application_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `privateApplicationId`<sup>Required</sup> <a name="privateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationConfig.property.privateApplicationId"></a>

```typescript
public readonly privateApplicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application#private_application_id DataOciServiceCatalogPrivateApplication#private_application_id}.

---

### DataOciServiceCatalogPrivateApplicationLogo <a name="DataOciServiceCatalogPrivateApplicationLogo" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogo.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplication } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogPrivateApplicationLogo: dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogo = { ... }
```


### DataOciServiceCatalogPrivateApplicationPackageDetails <a name="DataOciServiceCatalogPrivateApplicationPackageDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetails.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplication } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogPrivateApplicationPackageDetails: dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceCatalogPrivateApplicationLogoList <a name="DataOciServiceCatalogPrivateApplicationLogoList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplication } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.get"></a>

```typescript
public get(index: number): DataOciServiceCatalogPrivateApplicationLogoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceCatalogPrivateApplicationLogoOutputReference <a name="DataOciServiceCatalogPrivateApplicationLogoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplication } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.property.contentUrl">contentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogo">DataOciServiceCatalogPrivateApplicationLogo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentUrl`<sup>Required</sup> <a name="contentUrl" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.property.contentUrl"></a>

```typescript
public readonly contentUrl: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceCatalogPrivateApplicationLogo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationLogo">DataOciServiceCatalogPrivateApplicationLogo</a>

---


### DataOciServiceCatalogPrivateApplicationPackageDetailsList <a name="DataOciServiceCatalogPrivateApplicationPackageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplication } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.get"></a>

```typescript
public get(index: number): DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference <a name="DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplication } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageType">packageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64Encoded">zipFileBase64Encoded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetails">DataOciServiceCatalogPrivateApplicationPackageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageType"></a>

```typescript
public readonly packageType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `zipFileBase64Encoded`<sup>Required</sup> <a name="zipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64Encoded"></a>

```typescript
public readonly zipFileBase64Encoded: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceCatalogPrivateApplicationPackageDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplication.DataOciServiceCatalogPrivateApplicationPackageDetails">DataOciServiceCatalogPrivateApplicationPackageDetails</a>

---



