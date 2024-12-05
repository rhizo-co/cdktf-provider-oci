# `dataOciDatabaseMaintenanceRuns` Submodule <a name="`dataOciDatabaseMaintenanceRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMaintenanceRuns <a name="DataOciDatabaseMaintenanceRuns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs oci_database_maintenance_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns(scope: Construct, id: string, config: DataOciDatabaseMaintenanceRunsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig">DataOciDatabaseMaintenanceRunsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig">DataOciDatabaseMaintenanceRunsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceSubtype">resetMaintenanceSubtype</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceType">resetMaintenanceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceId">resetTargetResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceType">resetTargetResourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseMaintenanceRunsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenanceSubtype` <a name="resetMaintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceSubtype"></a>

```typescript
public resetMaintenanceSubtype(): void
```

##### `resetMaintenanceType` <a name="resetMaintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceType"></a>

```typescript
public resetMaintenanceType(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTargetResourceId` <a name="resetTargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceId"></a>

```typescript
public resetTargetResourceId(): void
```

##### `resetTargetResourceType` <a name="resetTargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceType"></a>

```typescript
public resetTargetResourceType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMaintenanceRuns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseMaintenanceRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseMaintenanceRuns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseMaintenanceRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMaintenanceRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList">DataOciDatabaseMaintenanceRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceRuns">maintenanceRuns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList">DataOciDatabaseMaintenanceRunsMaintenanceRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtypeInput">maintenanceSubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceTypeInput">maintenanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtype">maintenanceSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceType">maintenanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseMaintenanceRunsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList">DataOciDatabaseMaintenanceRunsFilterList</a>

---

##### `maintenanceRuns`<sup>Required</sup> <a name="maintenanceRuns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceRuns"></a>

```typescript
public readonly maintenanceRuns: DataOciDatabaseMaintenanceRunsMaintenanceRunsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList">DataOciDatabaseMaintenanceRunsMaintenanceRunsList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseMaintenanceRunsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceSubtypeInput`<sup>Optional</sup> <a name="maintenanceSubtypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtypeInput"></a>

```typescript
public readonly maintenanceSubtypeInput: string;
```

- *Type:* string

---

##### `maintenanceTypeInput`<sup>Optional</sup> <a name="maintenanceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceTypeInput"></a>

```typescript
public readonly maintenanceTypeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceIdInput"></a>

```typescript
public readonly targetResourceIdInput: string;
```

- *Type:* string

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceTypeInput"></a>

```typescript
public readonly targetResourceTypeInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceSubtype`<sup>Required</sup> <a name="maintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtype"></a>

```typescript
public readonly maintenanceSubtype: string;
```

- *Type:* string

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceType"></a>

```typescript
public readonly maintenanceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMaintenanceRunsConfig <a name="DataOciDatabaseMaintenanceRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMaintenanceRunsConfig: dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceSubtype">maintenanceSubtype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceType">maintenanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseMaintenanceRunsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#filter DataOciDatabaseMaintenanceRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceSubtype`<sup>Optional</sup> <a name="maintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceSubtype"></a>

```typescript
public readonly maintenanceSubtype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}.

---

##### `maintenanceType`<sup>Optional</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceType"></a>

```typescript
public readonly maintenanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}.

---

##### `targetResourceId`<sup>Optional</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}.

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}.

---

### DataOciDatabaseMaintenanceRunsFilter <a name="DataOciDatabaseMaintenanceRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMaintenanceRunsFilter: dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#name DataOciDatabaseMaintenanceRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#values DataOciDatabaseMaintenanceRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#regex DataOciDatabaseMaintenanceRuns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#name DataOciDatabaseMaintenanceRuns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#values DataOciDatabaseMaintenanceRuns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#regex DataOciDatabaseMaintenanceRuns#regex}.

---

### DataOciDatabaseMaintenanceRunsMaintenanceRuns <a name="DataOciDatabaseMaintenanceRunsMaintenanceRuns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMaintenanceRunsMaintenanceRuns: dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns = { ... }
```


### DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime: dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMaintenanceRunsFilterList <a name="DataOciDatabaseMaintenanceRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMaintenanceRunsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseMaintenanceRunsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>[]

---


### DataOciDatabaseMaintenanceRunsFilterOutputReference <a name="DataOciDatabaseMaintenanceRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseMaintenanceRunsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">estimatedDbServerPatchingTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">estimatedNetworkSwitchesPatchingTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">estimatedStorageServerPatchingTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">totalEstimatedPatchingTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedDbServerPatchingTime`<sup>Required</sup> <a name="estimatedDbServerPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```typescript
public readonly estimatedDbServerPatchingTime: number;
```

- *Type:* number

---

##### `estimatedNetworkSwitchesPatchingTime`<sup>Required</sup> <a name="estimatedNetworkSwitchesPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```typescript
public readonly estimatedNetworkSwitchesPatchingTime: number;
```

- *Type:* number

---

##### `estimatedStorageServerPatchingTime`<sup>Required</sup> <a name="estimatedStorageServerPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```typescript
public readonly estimatedStorageServerPatchingTime: number;
```

- *Type:* number

---

##### `totalEstimatedPatchingTime`<sup>Required</sup> <a name="totalEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```typescript
public readonly totalEstimatedPatchingTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime</a>

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsList <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentCustomActionTimeoutInMins">currentCustomActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentPatchingComponent">currentPatchingComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedComponentPatchingStartTime">estimatedComponentPatchingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedPatchingTime">estimatedPatchingTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isDstFileUpdateEnabled">isDstFileUpdateEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceSubtype">maintenanceSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceType">maintenanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchFailureCount">patchFailureCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchId">patchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingEndTime">patchingEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStartTime">patchingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStatus">patchingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchType">patchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.peerMaintenanceRunId">peerMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetDbServerVersion">targetDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetStorageServerVersion">targetStorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeScheduled">timeScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns">DataOciDatabaseMaintenanceRunsMaintenanceRuns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `currentCustomActionTimeoutInMins`<sup>Required</sup> <a name="currentCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentCustomActionTimeoutInMins"></a>

```typescript
public readonly currentCustomActionTimeoutInMins: number;
```

- *Type:* number

---

##### `currentPatchingComponent`<sup>Required</sup> <a name="currentPatchingComponent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentPatchingComponent"></a>

```typescript
public readonly currentPatchingComponent: string;
```

- *Type:* string

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `estimatedComponentPatchingStartTime`<sup>Required</sup> <a name="estimatedComponentPatchingStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedComponentPatchingStartTime"></a>

```typescript
public readonly estimatedComponentPatchingStartTime: string;
```

- *Type:* string

---

##### `estimatedPatchingTime`<sup>Required</sup> <a name="estimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedPatchingTime"></a>

```typescript
public readonly estimatedPatchingTime: DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDstFileUpdateEnabled`<sup>Required</sup> <a name="isDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isDstFileUpdateEnabled"></a>

```typescript
public readonly isDstFileUpdateEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `maintenanceSubtype`<sup>Required</sup> <a name="maintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceSubtype"></a>

```typescript
public readonly maintenanceSubtype: string;
```

- *Type:* string

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceType"></a>

```typescript
public readonly maintenanceType: string;
```

- *Type:* string

---

##### `patchFailureCount`<sup>Required</sup> <a name="patchFailureCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchFailureCount"></a>

```typescript
public readonly patchFailureCount: number;
```

- *Type:* number

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchId"></a>

```typescript
public readonly patchId: string;
```

- *Type:* string

---

##### `patchingEndTime`<sup>Required</sup> <a name="patchingEndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingEndTime"></a>

```typescript
public readonly patchingEndTime: string;
```

- *Type:* string

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `patchingStartTime`<sup>Required</sup> <a name="patchingStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStartTime"></a>

```typescript
public readonly patchingStartTime: string;
```

- *Type:* string

---

##### `patchingStatus`<sup>Required</sup> <a name="patchingStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStatus"></a>

```typescript
public readonly patchingStatus: string;
```

- *Type:* string

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchType"></a>

```typescript
public readonly patchType: string;
```

- *Type:* string

---

##### `peerMaintenanceRunId`<sup>Required</sup> <a name="peerMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.peerMaintenanceRunId"></a>

```typescript
public readonly peerMaintenanceRunId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetDbServerVersion`<sup>Required</sup> <a name="targetDbServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetDbServerVersion"></a>

```typescript
public readonly targetDbServerVersion: string;
```

- *Type:* string

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

---

##### `targetStorageServerVersion`<sup>Required</sup> <a name="targetStorageServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetStorageServerVersion"></a>

```typescript
public readonly targetStorageServerVersion: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeScheduled`<sup>Required</sup> <a name="timeScheduled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeScheduled"></a>

```typescript
public readonly timeScheduled: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMaintenanceRunsMaintenanceRuns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns">DataOciDatabaseMaintenanceRunsMaintenanceRuns</a>

---



