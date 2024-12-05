# `dataOciFleetAppsManagementTaskRecords` Submodule <a name="`dataOciFleetAppsManagementTaskRecords` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementTaskRecords <a name="DataOciFleetAppsManagementTaskRecords" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records oci_fleet_apps_management_task_records}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords(scope: Construct, id: string, config?: DataOciFleetAppsManagementTaskRecordsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig">DataOciFleetAppsManagementTaskRecordsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig">DataOciFleetAppsManagementTaskRecordsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFleetAppsManagementTaskRecordsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter">DataOciFleetAppsManagementTaskRecordsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPlatform` <a name="resetPlatform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetState"></a>

```typescript
public resetState(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementTaskRecords resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isConstruct"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformElement"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformDataSource"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementTaskRecords resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementTaskRecords to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementTaskRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementTaskRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList">DataOciFleetAppsManagementTaskRecordsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.taskRecordCollection">taskRecordCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter">DataOciFleetAppsManagementTaskRecordsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.filter"></a>

```typescript
public readonly filter: DataOciFleetAppsManagementTaskRecordsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList">DataOciFleetAppsManagementTaskRecordsFilterList</a>

---

##### `taskRecordCollection`<sup>Required</sup> <a name="taskRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.taskRecordCollection"></a>

```typescript
public readonly taskRecordCollection: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFleetAppsManagementTaskRecordsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter">DataOciFleetAppsManagementTaskRecordsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementTaskRecordsConfig <a name="DataOciFleetAppsManagementTaskRecordsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementTaskRecordsConfig: dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#compartment_id DataOciFleetAppsManagementTaskRecords#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#display_name DataOciFleetAppsManagementTaskRecords#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter">DataOciFleetAppsManagementTaskRecordsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#id DataOciFleetAppsManagementTaskRecords#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#platform DataOciFleetAppsManagementTaskRecords#platform}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#state DataOciFleetAppsManagementTaskRecords#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#type DataOciFleetAppsManagementTaskRecords#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#compartment_id DataOciFleetAppsManagementTaskRecords#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#display_name DataOciFleetAppsManagementTaskRecords#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFleetAppsManagementTaskRecordsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter">DataOciFleetAppsManagementTaskRecordsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#filter DataOciFleetAppsManagementTaskRecords#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#id DataOciFleetAppsManagementTaskRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#platform DataOciFleetAppsManagementTaskRecords#platform}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#state DataOciFleetAppsManagementTaskRecords#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#type DataOciFleetAppsManagementTaskRecords#type}.

---

### DataOciFleetAppsManagementTaskRecordsFilter <a name="DataOciFleetAppsManagementTaskRecordsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementTaskRecordsFilter: dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#name DataOciFleetAppsManagementTaskRecords#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#values DataOciFleetAppsManagementTaskRecords#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#regex DataOciFleetAppsManagementTaskRecords#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#name DataOciFleetAppsManagementTaskRecords#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#values DataOciFleetAppsManagementTaskRecords#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#regex DataOciFleetAppsManagementTaskRecords#regex}.

---

### DataOciFleetAppsManagementTaskRecordsTaskRecordCollection <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementTaskRecordsTaskRecordCollection: dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection = { ... }
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems: dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems = { ... }
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails: dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails = { ... }
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails: dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails = { ... }
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent: dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent = { ... }
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables: dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables = { ... }
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables: dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables = { ... }
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties: dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementTaskRecordsFilterList <a name="DataOciFleetAppsManagementTaskRecordsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementTaskRecordsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter">DataOciFleetAppsManagementTaskRecordsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementTaskRecordsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter">DataOciFleetAppsManagementTaskRecordsFilter</a>[]

---


### DataOciFleetAppsManagementTaskRecordsFilterOutputReference <a name="DataOciFleetAppsManagementTaskRecordsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter">DataOciFleetAppsManagementTaskRecordsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementTaskRecordsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter">DataOciFleetAppsManagementTaskRecordsFilter</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.content">content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.executionType">executionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.content"></a>

```typescript
public readonly content: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `executionType`<sup>Required</sup> <a name="executionType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.executionType"></a>

```typescript
public readonly executionType: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.variables"></a>

```typescript
public readonly variables: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.outputVariables">outputVariables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.inputVariables"></a>

```typescript
public readonly inputVariables: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList</a>

---

##### `outputVariables`<sup>Required</sup> <a name="outputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.outputVariables"></a>

```typescript
public readonly outputVariables: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.executionDetails">executionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionDetails`<sup>Required</sup> <a name="executionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.executionDetails"></a>

```typescript
public readonly executionDetails: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList</a>

---

##### `osType`<sup>Required</sup> <a name="osType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.properties"></a>

```typescript
public readonly properties: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.numRetries">numRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numRetries`<sup>Required</sup> <a name="numRetries" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.numRetries"></a>

```typescript
public readonly numRetries: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.details"></a>

```typescript
public readonly details: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementTaskRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection">DataOciFleetAppsManagementTaskRecordsTaskRecordCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementTaskRecordsTaskRecordCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection">DataOciFleetAppsManagementTaskRecordsTaskRecordCollection</a>

---



