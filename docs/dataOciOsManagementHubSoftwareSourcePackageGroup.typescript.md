# `dataOciOsManagementHubSoftwareSourcePackageGroup` Submodule <a name="`dataOciOsManagementHubSoftwareSourcePackageGroup` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourcePackageGroup <a name="DataOciOsManagementHubSoftwareSourcePackageGroup" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_group oci_os_management_hub_software_source_package_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup(scope: Construct, id: string, config: DataOciOsManagementHubSoftwareSourcePackageGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig">DataOciOsManagementHubSoftwareSourcePackageGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig">DataOciOsManagementHubSoftwareSourcePackageGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourcePackageGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.isConstruct"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroup } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroup } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroup } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroup } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourcePackageGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourcePackageGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubSoftwareSourcePackageGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourcePackageGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.displayOrder">displayOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.groupType">groupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.isDefault">isDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.isUserVisible">isUserVisible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.packages">packages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.repositories">repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.packageGroupIdInput">packageGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.packageGroupId">packageGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayOrder`<sup>Required</sup> <a name="displayOrder" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.displayOrder"></a>

```typescript
public readonly displayOrder: number;
```

- *Type:* number

---

##### `groupType`<sup>Required</sup> <a name="groupType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.groupType"></a>

```typescript
public readonly groupType: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isUserVisible`<sup>Required</sup> <a name="isUserVisible" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.isUserVisible"></a>

```typescript
public readonly isUserVisible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.repositories"></a>

```typescript
public readonly repositories: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `packageGroupIdInput`<sup>Optional</sup> <a name="packageGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.packageGroupIdInput"></a>

```typescript
public readonly packageGroupIdInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `packageGroupId`<sup>Required</sup> <a name="packageGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.packageGroupId"></a>

```typescript
public readonly packageGroupId: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourcePackageGroupConfig <a name="DataOciOsManagementHubSoftwareSourcePackageGroupConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroup } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourcePackageGroupConfig: dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.packageGroupId">packageGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_group#package_group_id DataOciOsManagementHubSoftwareSourcePackageGroup#package_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_group#software_source_id DataOciOsManagementHubSoftwareSourcePackageGroup#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_group#id DataOciOsManagementHubSoftwareSourcePackageGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `packageGroupId`<sup>Required</sup> <a name="packageGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.packageGroupId"></a>

```typescript
public readonly packageGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_group#package_group_id DataOciOsManagementHubSoftwareSourcePackageGroup#package_group_id}.

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_group#software_source_id DataOciOsManagementHubSoftwareSourcePackageGroup#software_source_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroup.DataOciOsManagementHubSoftwareSourcePackageGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_group#id DataOciOsManagementHubSoftwareSourcePackageGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



