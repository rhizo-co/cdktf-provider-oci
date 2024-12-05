# `dataOciLicenseManagerProductLicense` Submodule <a name="`dataOciLicenseManagerProductLicense` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerProductLicense <a name="DataOciLicenseManagerProductLicense" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license oci_license_manager_product_license}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicense } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense(scope: Construct, id: string, config: DataOciLicenseManagerProductLicenseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig">DataOciLicenseManagerProductLicenseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig">DataOciLicenseManagerProductLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerProductLicense resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isConstruct"></a>

```typescript
import { dataOciLicenseManagerProductLicense } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformElement"></a>

```typescript
import { dataOciLicenseManagerProductLicense } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformDataSource"></a>

```typescript
import { dataOciLicenseManagerProductLicense } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport"></a>

```typescript
import { dataOciLicenseManagerProductLicense } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLicenseManagerProductLicense resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLicenseManagerProductLicense to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLicenseManagerProductLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerProductLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.activeLicenseRecordCount">activeLicenseRecordCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.images">images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList">DataOciLicenseManagerProductLicenseImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.isOverSubscribed">isOverSubscribed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.isUnlimited">isUnlimited</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.isVendorOracle">isVendorOracle</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.licenseUnit">licenseUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.statusDescription">statusDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.totalActiveLicenseUnitCount">totalActiveLicenseUnitCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.totalLicenseRecordCount">totalLicenseRecordCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.totalLicenseUnitsConsumed">totalLicenseUnitsConsumed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.vendorName">vendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.productLicenseIdInput">productLicenseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.productLicenseId">productLicenseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `activeLicenseRecordCount`<sup>Required</sup> <a name="activeLicenseRecordCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.activeLicenseRecordCount"></a>

```typescript
public readonly activeLicenseRecordCount: number;
```

- *Type:* number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `images`<sup>Required</sup> <a name="images" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.images"></a>

```typescript
public readonly images: DataOciLicenseManagerProductLicenseImagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList">DataOciLicenseManagerProductLicenseImagesList</a>

---

##### `isOverSubscribed`<sup>Required</sup> <a name="isOverSubscribed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.isOverSubscribed"></a>

```typescript
public readonly isOverSubscribed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isUnlimited`<sup>Required</sup> <a name="isUnlimited" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.isUnlimited"></a>

```typescript
public readonly isUnlimited: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isVendorOracle`<sup>Required</sup> <a name="isVendorOracle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.isVendorOracle"></a>

```typescript
public readonly isVendorOracle: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `licenseUnit`<sup>Required</sup> <a name="licenseUnit" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.licenseUnit"></a>

```typescript
public readonly licenseUnit: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDescription`<sup>Required</sup> <a name="statusDescription" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.statusDescription"></a>

```typescript
public readonly statusDescription: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `totalActiveLicenseUnitCount`<sup>Required</sup> <a name="totalActiveLicenseUnitCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.totalActiveLicenseUnitCount"></a>

```typescript
public readonly totalActiveLicenseUnitCount: number;
```

- *Type:* number

---

##### `totalLicenseRecordCount`<sup>Required</sup> <a name="totalLicenseRecordCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.totalLicenseRecordCount"></a>

```typescript
public readonly totalLicenseRecordCount: number;
```

- *Type:* number

---

##### `totalLicenseUnitsConsumed`<sup>Required</sup> <a name="totalLicenseUnitsConsumed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.totalLicenseUnitsConsumed"></a>

```typescript
public readonly totalLicenseUnitsConsumed: number;
```

- *Type:* number

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.vendorName"></a>

```typescript
public readonly vendorName: string;
```

- *Type:* string

---

##### `productLicenseIdInput`<sup>Optional</sup> <a name="productLicenseIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.productLicenseIdInput"></a>

```typescript
public readonly productLicenseIdInput: string;
```

- *Type:* string

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.productLicenseId"></a>

```typescript
public readonly productLicenseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerProductLicenseConfig <a name="DataOciLicenseManagerProductLicenseConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicense } from 'rhizo-co-terraform-provider-oci'

const dataOciLicenseManagerProductLicenseConfig: dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.productLicenseId">productLicenseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license#product_license_id DataOciLicenseManagerProductLicense#product_license_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.productLicenseId"></a>

```typescript
public readonly productLicenseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license#product_license_id DataOciLicenseManagerProductLicense#product_license_id}.

---

### DataOciLicenseManagerProductLicenseImages <a name="DataOciLicenseManagerProductLicenseImages" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImages.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicense } from 'rhizo-co-terraform-provider-oci'

const dataOciLicenseManagerProductLicenseImages: dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImages = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerProductLicenseImagesList <a name="DataOciLicenseManagerProductLicenseImagesList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicense } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.get"></a>

```typescript
public get(index: number): DataOciLicenseManagerProductLicenseImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLicenseManagerProductLicenseImagesOutputReference <a name="DataOciLicenseManagerProductLicenseImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicense } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.listingName">listingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.packageVersion">packageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImages">DataOciLicenseManagerProductLicenseImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `listingName`<sup>Required</sup> <a name="listingName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.listingName"></a>

```typescript
public readonly listingName: string;
```

- *Type:* string

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLicenseManagerProductLicenseImages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImages">DataOciLicenseManagerProductLicenseImages</a>

---



