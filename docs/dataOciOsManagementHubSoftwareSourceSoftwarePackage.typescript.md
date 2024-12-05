# `dataOciOsManagementHubSoftwareSourceSoftwarePackage` Submodule <a name="`dataOciOsManagementHubSoftwareSourceSoftwarePackage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackage <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package oci_os_management_hub_software_source_software_package}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage(scope: Construct, id: string, config: DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig">DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig">DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceSoftwarePackage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isConstruct"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceSoftwarePackage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourceSoftwarePackage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubSoftwareSourceSoftwarePackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourceSoftwarePackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.checksumType">checksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.dependencies">dependencies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList">DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.files">files</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList">DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.isLatest">isLatest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.osFamilies">osFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwareSources">softwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList">DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwarePackageNameInput">softwarePackageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwarePackageName">softwarePackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `checksumType`<sup>Required</sup> <a name="checksumType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.checksumType"></a>

```typescript
public readonly checksumType: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.dependencies"></a>

```typescript
public readonly dependencies: DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList">DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `files`<sup>Required</sup> <a name="files" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.files"></a>

```typescript
public readonly files: DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList">DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList</a>

---

##### `isLatest`<sup>Required</sup> <a name="isLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.isLatest"></a>

```typescript
public readonly isLatest: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osFamilies`<sup>Required</sup> <a name="osFamilies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.osFamilies"></a>

```typescript
public readonly osFamilies: string[];
```

- *Type:* string[]

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwareSources"></a>

```typescript
public readonly softwareSources: DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList">DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `softwarePackageNameInput`<sup>Optional</sup> <a name="softwarePackageNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwarePackageNameInput"></a>

```typescript
public readonly softwarePackageNameInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `softwarePackageName`<sup>Required</sup> <a name="softwarePackageName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwarePackageName"></a>

```typescript
public readonly softwarePackageName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourceSoftwarePackageConfig: dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.softwarePackageName">softwarePackageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#software_package_name DataOciOsManagementHubSoftwareSourceSoftwarePackage#software_package_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackage#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#id DataOciOsManagementHubSoftwareSourceSoftwarePackage#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `softwarePackageName`<sup>Required</sup> <a name="softwarePackageName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.softwarePackageName"></a>

```typescript
public readonly softwarePackageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#software_package_name DataOciOsManagementHubSoftwareSourceSoftwarePackage#software_package_name}.

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackage#software_source_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#id DataOciOsManagementHubSoftwareSourceSoftwarePackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies: dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies = { ... }
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourceSoftwarePackageFiles: dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles = { ... }
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources: dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.dependency">dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.dependencyModifier">dependencyModifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.dependencyType">dependencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies">DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

---

##### `dependencyModifier`<sup>Required</sup> <a name="dependencyModifier" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.dependencyModifier"></a>

```typescript
public readonly dependencyModifier: string;
```

- *Type:* string

---

##### `dependencyType`<sup>Required</sup> <a name="dependencyType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.dependencyType"></a>

```typescript
public readonly dependencyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies">DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.checksumType">checksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles">DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `checksumType`<sup>Required</sup> <a name="checksumType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.checksumType"></a>

```typescript
public readonly checksumType: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles">DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources">DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```typescript
public readonly isMandatoryForAutonomousLinux: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```typescript
public readonly softwareSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources">DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources</a>

---



