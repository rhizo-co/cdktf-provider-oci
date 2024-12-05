# `dataOciFleetAppsManagementSchedulerDefinitions` Submodule <a name="`dataOciFleetAppsManagementSchedulerDefinitions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementSchedulerDefinitions <a name="DataOciFleetAppsManagementSchedulerDefinitions" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions oci_fleet_apps_management_scheduler_definitions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions(scope: Construct, id: string, config?: DataOciFleetAppsManagementSchedulerDefinitionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig">DataOciFleetAppsManagementSchedulerDefinitionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig">DataOciFleetAppsManagementSchedulerDefinitionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFleetId">resetFleetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetMaintenanceWindowId">resetMaintenanceWindowId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFleetAppsManagementSchedulerDefinitionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFleetId` <a name="resetFleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFleetId"></a>

```typescript
public resetFleetId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenanceWindowId` <a name="resetMaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetMaintenanceWindowId"></a>

```typescript
public resetMaintenanceWindowId(): void
```

##### `resetProduct` <a name="resetProduct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetProduct"></a>

```typescript
public resetProduct(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerDefinitions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementSchedulerDefinitions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerDefinitions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList">DataOciFleetAppsManagementSchedulerDefinitionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.schedulerDefinitionCollection">schedulerDefinitionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowIdInput">maintenanceWindowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filter"></a>

```typescript
public readonly filter: DataOciFleetAppsManagementSchedulerDefinitionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList">DataOciFleetAppsManagementSchedulerDefinitionsFilterList</a>

---

##### `schedulerDefinitionCollection`<sup>Required</sup> <a name="schedulerDefinitionCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.schedulerDefinitionCollection"></a>

```typescript
public readonly schedulerDefinitionCollection: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFleetAppsManagementSchedulerDefinitionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>[]

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceWindowIdInput`<sup>Optional</sup> <a name="maintenanceWindowIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowIdInput"></a>

```typescript
public readonly maintenanceWindowIdInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceWindowId`<sup>Required</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowId"></a>

```typescript
public readonly maintenanceWindowId: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionsConfig <a name="DataOciFleetAppsManagementSchedulerDefinitionsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementSchedulerDefinitionsConfig: dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#compartment_id DataOciFleetAppsManagementSchedulerDefinitions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#display_name DataOciFleetAppsManagementSchedulerDefinitions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.fleetId">fleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#fleet_id DataOciFleetAppsManagementSchedulerDefinitions#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#id DataOciFleetAppsManagementSchedulerDefinitions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#maintenance_window_id DataOciFleetAppsManagementSchedulerDefinitions#maintenance_window_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.product">product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#product DataOciFleetAppsManagementSchedulerDefinitions#product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#state DataOciFleetAppsManagementSchedulerDefinitions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#compartment_id DataOciFleetAppsManagementSchedulerDefinitions#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#display_name DataOciFleetAppsManagementSchedulerDefinitions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFleetAppsManagementSchedulerDefinitionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#filter DataOciFleetAppsManagementSchedulerDefinitions#filter}

---

##### `fleetId`<sup>Optional</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#fleet_id DataOciFleetAppsManagementSchedulerDefinitions#fleet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#id DataOciFleetAppsManagementSchedulerDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindowId`<sup>Optional</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.maintenanceWindowId"></a>

```typescript
public readonly maintenanceWindowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#maintenance_window_id DataOciFleetAppsManagementSchedulerDefinitions#maintenance_window_id}.

---

##### `product`<sup>Optional</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#product DataOciFleetAppsManagementSchedulerDefinitions#product}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#state DataOciFleetAppsManagementSchedulerDefinitions#state}.

---

### DataOciFleetAppsManagementSchedulerDefinitionsFilter <a name="DataOciFleetAppsManagementSchedulerDefinitionsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementSchedulerDefinitionsFilter: dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#name DataOciFleetAppsManagementSchedulerDefinitions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#values DataOciFleetAppsManagementSchedulerDefinitions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#regex DataOciFleetAppsManagementSchedulerDefinitions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#name DataOciFleetAppsManagementSchedulerDefinitions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#values DataOciFleetAppsManagementSchedulerDefinitions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#regex DataOciFleetAppsManagementSchedulerDefinitions#regex}.

---

### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection: dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection = { ... }
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems: dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems = { ... }
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups: dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups = { ... }
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks: dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks = { ... }
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters: dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters = { ... }
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments: dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments = { ... }
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule: dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementSchedulerDefinitionsFilterList <a name="DataOciFleetAppsManagementSchedulerDefinitionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementSchedulerDefinitionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>[]

---


### DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementSchedulerDefinitionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.lifecycleOperation">lifecycleOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.runbookId">runbookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.subjects">subjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `lifecycleOperation`<sup>Required</sup> <a name="lifecycleOperation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.lifecycleOperation"></a>

```typescript
public readonly lifecycleOperation: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `runbookId`<sup>Required</sup> <a name="runbookId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.runbookId"></a>

```typescript
public readonly runbookId: string;
```

- *Type:* string

---

##### `subjects`<sup>Required</sup> <a name="subjects" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.subjects"></a>

```typescript
public readonly subjects: string[];
```

- *Type:* string[]

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroups">actionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroupTypes">actionGroupTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.activityInitiationCutOff">activityInitiationCutOff</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.applicationTypes">applicationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedActionGroups">countOfAffectedActionGroups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedResources">countOfAffectedResources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedTargets">countOfAffectedTargets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleOperations">lifecycleOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.products">products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.runBooks">runBooks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeOfNextRun">timeOfNextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionGroups`<sup>Required</sup> <a name="actionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroups"></a>

```typescript
public readonly actionGroups: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList</a>

---

##### `actionGroupTypes`<sup>Required</sup> <a name="actionGroupTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroupTypes"></a>

```typescript
public readonly actionGroupTypes: string[];
```

- *Type:* string[]

---

##### `activityInitiationCutOff`<sup>Required</sup> <a name="activityInitiationCutOff" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.activityInitiationCutOff"></a>

```typescript
public readonly activityInitiationCutOff: number;
```

- *Type:* number

---

##### `applicationTypes`<sup>Required</sup> <a name="applicationTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.applicationTypes"></a>

```typescript
public readonly applicationTypes: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `countOfAffectedActionGroups`<sup>Required</sup> <a name="countOfAffectedActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedActionGroups"></a>

```typescript
public readonly countOfAffectedActionGroups: number;
```

- *Type:* number

---

##### `countOfAffectedResources`<sup>Required</sup> <a name="countOfAffectedResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedResources"></a>

```typescript
public readonly countOfAffectedResources: number;
```

- *Type:* number

---

##### `countOfAffectedTargets`<sup>Required</sup> <a name="countOfAffectedTargets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedTargets"></a>

```typescript
public readonly countOfAffectedTargets: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `lifecycleOperations`<sup>Required</sup> <a name="lifecycleOperations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleOperations"></a>

```typescript
public readonly lifecycleOperations: string[];
```

- *Type:* string[]

---

##### `products`<sup>Required</sup> <a name="products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `runBooks`<sup>Required</sup> <a name="runBooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.runBooks"></a>

```typescript
public readonly runBooks: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfNextRun`<sup>Required</sup> <a name="timeOfNextRun" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeOfNextRun"></a>

```typescript
public readonly timeOfNextRun: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.arguments">arguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.arguments"></a>

```typescript
public readonly arguments: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList</a>

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.inputParameters">inputParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.inputParameters"></a>

```typescript
public readonly inputParameters: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.executionStartdate">executionStartdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.recurrences">recurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `executionStartdate`<sup>Required</sup> <a name="executionStartdate" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.executionStartdate"></a>

```typescript
public readonly executionStartdate: string;
```

- *Type:* string

---

##### `maintenanceWindowId`<sup>Required</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.maintenanceWindowId"></a>

```typescript
public readonly maintenanceWindowId: string;
```

- *Type:* string

---

##### `recurrences`<sup>Required</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.recurrences"></a>

```typescript
public readonly recurrences: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementSchedulerDefinitions } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection</a>

---



