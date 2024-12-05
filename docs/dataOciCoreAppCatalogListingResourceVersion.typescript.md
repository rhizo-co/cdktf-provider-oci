# `dataOciCoreAppCatalogListingResourceVersion` Submodule <a name="`dataOciCoreAppCatalogListingResourceVersion` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreAppCatalogListingResourceVersion <a name="DataOciCoreAppCatalogListingResourceVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version oci_core_app_catalog_listing_resource_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer"></a>

```typescript
import { dataOciCoreAppCatalogListingResourceVersion } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion(scope: Construct, id: string, config: DataOciCoreAppCatalogListingResourceVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig">DataOciCoreAppCatalogListingResourceVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig">DataOciCoreAppCatalogListingResourceVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreAppCatalogListingResourceVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isConstruct"></a>

```typescript
import { dataOciCoreAppCatalogListingResourceVersion } from 'rhizo-co-terraform-provider-oci'

dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformElement"></a>

```typescript
import { dataOciCoreAppCatalogListingResourceVersion } from 'rhizo-co-terraform-provider-oci'

dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformDataSource"></a>

```typescript
import { dataOciCoreAppCatalogListingResourceVersion } from 'rhizo-co-terraform-provider-oci'

dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport"></a>

```typescript
import { dataOciCoreAppCatalogListingResourceVersion } from 'rhizo-co-terraform-provider-oci'

dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreAppCatalogListingResourceVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreAppCatalogListingResourceVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreAppCatalogListingResourceVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreAppCatalogListingResourceVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.accessiblePorts">accessiblePorts</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.allowedActions">allowedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.availableRegions">availableRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.compatibleShapes">compatibleShapes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingResourceId">listingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingResourceVersion">listingResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.timePublished">timePublished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingIdInput">listingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.resourceVersionInput">resourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessiblePorts`<sup>Required</sup> <a name="accessiblePorts" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.accessiblePorts"></a>

```typescript
public readonly accessiblePorts: number[];
```

- *Type:* number[]

---

##### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.allowedActions"></a>

```typescript
public readonly allowedActions: string[];
```

- *Type:* string[]

---

##### `availableRegions`<sup>Required</sup> <a name="availableRegions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.availableRegions"></a>

```typescript
public readonly availableRegions: string[];
```

- *Type:* string[]

---

##### `compatibleShapes`<sup>Required</sup> <a name="compatibleShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.compatibleShapes"></a>

```typescript
public readonly compatibleShapes: string[];
```

- *Type:* string[]

---

##### `listingResourceId`<sup>Required</sup> <a name="listingResourceId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingResourceId"></a>

```typescript
public readonly listingResourceId: string;
```

- *Type:* string

---

##### `listingResourceVersion`<sup>Required</sup> <a name="listingResourceVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingResourceVersion"></a>

```typescript
public readonly listingResourceVersion: string;
```

- *Type:* string

---

##### `timePublished`<sup>Required</sup> <a name="timePublished" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.timePublished"></a>

```typescript
public readonly timePublished: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingIdInput"></a>

```typescript
public readonly listingIdInput: string;
```

- *Type:* string

---

##### `resourceVersionInput`<sup>Optional</sup> <a name="resourceVersionInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.resourceVersionInput"></a>

```typescript
public readonly resourceVersionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreAppCatalogListingResourceVersionConfig <a name="DataOciCoreAppCatalogListingResourceVersionConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.Initializer"></a>

```typescript
import { dataOciCoreAppCatalogListingResourceVersion } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreAppCatalogListingResourceVersionConfig: dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.listingId">listingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#listing_id DataOciCoreAppCatalogListingResourceVersion#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#resource_version DataOciCoreAppCatalogListingResourceVersion#resource_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#id DataOciCoreAppCatalogListingResourceVersion#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#listing_id DataOciCoreAppCatalogListingResourceVersion#listing_id}.

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#resource_version DataOciCoreAppCatalogListingResourceVersion#resource_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#id DataOciCoreAppCatalogListingResourceVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



