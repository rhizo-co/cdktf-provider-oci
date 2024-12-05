# `dataOciFleetAppsManagementMaintenanceWindow` Submodule <a name="`dataOciFleetAppsManagementMaintenanceWindow` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementMaintenanceWindow <a name="DataOciFleetAppsManagementMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_window oci_fleet_apps_management_maintenance_window}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow(scope: Construct, id: string, config: DataOciFleetAppsManagementMaintenanceWindowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig">DataOciFleetAppsManagementMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig">DataOciFleetAppsManagementMaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isConstruct"></a>

```typescript
import { dataOciFleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformElement"></a>

```typescript
import { dataOciFleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformDataSource"></a>

```typescript
import { dataOciFleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport"></a>

```typescript
import { dataOciFleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.isOutage">isOutage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.isRecurring">isRecurring</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.maintenanceWindowType">maintenanceWindowType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.recurrences">recurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.taskInitiationCutoff">taskInitiationCutoff</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.timeScheduleStart">timeScheduleStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.maintenanceWindowIdInput">maintenanceWindowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isOutage`<sup>Required</sup> <a name="isOutage" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.isOutage"></a>

```typescript
public readonly isOutage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRecurring`<sup>Required</sup> <a name="isRecurring" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.isRecurring"></a>

```typescript
public readonly isRecurring: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `maintenanceWindowType`<sup>Required</sup> <a name="maintenanceWindowType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.maintenanceWindowType"></a>

```typescript
public readonly maintenanceWindowType: string;
```

- *Type:* string

---

##### `recurrences`<sup>Required</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.recurrences"></a>

```typescript
public readonly recurrences: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `taskInitiationCutoff`<sup>Required</sup> <a name="taskInitiationCutoff" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.taskInitiationCutoff"></a>

```typescript
public readonly taskInitiationCutoff: number;
```

- *Type:* number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeScheduleStart`<sup>Required</sup> <a name="timeScheduleStart" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.timeScheduleStart"></a>

```typescript
public readonly timeScheduleStart: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `maintenanceWindowIdInput`<sup>Optional</sup> <a name="maintenanceWindowIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.maintenanceWindowIdInput"></a>

```typescript
public readonly maintenanceWindowIdInput: string;
```

- *Type:* string

---

##### `maintenanceWindowId`<sup>Required</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.maintenanceWindowId"></a>

```typescript
public readonly maintenanceWindowId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementMaintenanceWindowConfig <a name="DataOciFleetAppsManagementMaintenanceWindowConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementMaintenanceWindowConfig: dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_window#maintenance_window_id DataOciFleetAppsManagementMaintenanceWindow#maintenance_window_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maintenanceWindowId`<sup>Required</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.maintenanceWindowId"></a>

```typescript
public readonly maintenanceWindowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_window#maintenance_window_id DataOciFleetAppsManagementMaintenanceWindow#maintenance_window_id}.

---



