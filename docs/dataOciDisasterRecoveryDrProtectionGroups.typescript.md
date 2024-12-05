# `dataOciDisasterRecoveryDrProtectionGroups` Submodule <a name="`dataOciDisasterRecoveryDrProtectionGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDisasterRecoveryDrProtectionGroups <a name="DataOciDisasterRecoveryDrProtectionGroups" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups oci_disaster_recovery_dr_protection_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups(scope: Construct, id: string, config: DataOciDisasterRecoveryDrProtectionGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig">DataOciDisasterRecoveryDrProtectionGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig">DataOciDisasterRecoveryDrProtectionGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetDrProtectionGroupId">resetDrProtectionGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetLifecycleSubState">resetLifecycleSubState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDisasterRecoveryDrProtectionGroupsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter">DataOciDisasterRecoveryDrProtectionGroupsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDrProtectionGroupId` <a name="resetDrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetDrProtectionGroupId"></a>

```typescript
public resetDrProtectionGroupId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLifecycleSubState` <a name="resetLifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetLifecycleSubState"></a>

```typescript
public resetLifecycleSubState(): void
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDisasterRecoveryDrProtectionGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isConstruct"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformElement"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformDataSource"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDisasterRecoveryDrProtectionGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDisasterRecoveryDrProtectionGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDisasterRecoveryDrProtectionGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDisasterRecoveryDrProtectionGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.drProtectionGroupCollection">drProtectionGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList">DataOciDisasterRecoveryDrProtectionGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.drProtectionGroupIdInput">drProtectionGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter">DataOciDisasterRecoveryDrProtectionGroupsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.lifecycleSubStateInput">lifecycleSubStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.drProtectionGroupId">drProtectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.lifecycleSubState">lifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `drProtectionGroupCollection`<sup>Required</sup> <a name="drProtectionGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.drProtectionGroupCollection"></a>

```typescript
public readonly drProtectionGroupCollection: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.filter"></a>

```typescript
public readonly filter: DataOciDisasterRecoveryDrProtectionGroupsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList">DataOciDisasterRecoveryDrProtectionGroupsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `drProtectionGroupIdInput`<sup>Optional</sup> <a name="drProtectionGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.drProtectionGroupIdInput"></a>

```typescript
public readonly drProtectionGroupIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDisasterRecoveryDrProtectionGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter">DataOciDisasterRecoveryDrProtectionGroupsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifecycleSubStateInput`<sup>Optional</sup> <a name="lifecycleSubStateInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.lifecycleSubStateInput"></a>

```typescript
public readonly lifecycleSubStateInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `drProtectionGroupId`<sup>Required</sup> <a name="drProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.drProtectionGroupId"></a>

```typescript
public readonly drProtectionGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleSubState`<sup>Required</sup> <a name="lifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.lifecycleSubState"></a>

```typescript
public readonly lifecycleSubState: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDisasterRecoveryDrProtectionGroupsConfig <a name="DataOciDisasterRecoveryDrProtectionGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsConfig: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#compartment_id DataOciDisasterRecoveryDrProtectionGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#display_name DataOciDisasterRecoveryDrProtectionGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.drProtectionGroupId">drProtectionGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#dr_protection_group_id DataOciDisasterRecoveryDrProtectionGroups#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter">DataOciDisasterRecoveryDrProtectionGroupsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#id DataOciDisasterRecoveryDrProtectionGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.lifecycleSubState">lifecycleSubState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#lifecycle_sub_state DataOciDisasterRecoveryDrProtectionGroups#lifecycle_sub_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#role DataOciDisasterRecoveryDrProtectionGroups#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#state DataOciDisasterRecoveryDrProtectionGroups#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#compartment_id DataOciDisasterRecoveryDrProtectionGroups#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#display_name DataOciDisasterRecoveryDrProtectionGroups#display_name}.

---

##### `drProtectionGroupId`<sup>Optional</sup> <a name="drProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.drProtectionGroupId"></a>

```typescript
public readonly drProtectionGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#dr_protection_group_id DataOciDisasterRecoveryDrProtectionGroups#dr_protection_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDisasterRecoveryDrProtectionGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter">DataOciDisasterRecoveryDrProtectionGroupsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#filter DataOciDisasterRecoveryDrProtectionGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#id DataOciDisasterRecoveryDrProtectionGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleSubState`<sup>Optional</sup> <a name="lifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.lifecycleSubState"></a>

```typescript
public readonly lifecycleSubState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#lifecycle_sub_state DataOciDisasterRecoveryDrProtectionGroups#lifecycle_sub_state}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#role DataOciDisasterRecoveryDrProtectionGroups#role}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#state DataOciDisasterRecoveryDrProtectionGroups#state}.

---

### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings = { ... }
```


### DataOciDisasterRecoveryDrProtectionGroupsFilter <a name="DataOciDisasterRecoveryDrProtectionGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDisasterRecoveryDrProtectionGroupsFilter: dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#name DataOciDisasterRecoveryDrProtectionGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#values DataOciDisasterRecoveryDrProtectionGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#regex DataOciDisasterRecoveryDrProtectionGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#name DataOciDisasterRecoveryDrProtectionGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#values DataOciDisasterRecoveryDrProtectionGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#regex DataOciDisasterRecoveryDrProtectionGroups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.peerId">peerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.peerRegion">peerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.destinationBackendSetName">destinationBackendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovable">isBackendSetForNonMovable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.sourceBackendSetName">sourceBackendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationBackendSetName`<sup>Required</sup> <a name="destinationBackendSetName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.destinationBackendSetName"></a>

```typescript
public readonly destinationBackendSetName: string;
```

- *Type:* string

---

##### `isBackendSetForNonMovable`<sup>Required</sup> <a name="isBackendSetForNonMovable" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovable"></a>

```typescript
public readonly isBackendSetForNonMovable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sourceBackendSetName`<sup>Required</sup> <a name="sourceBackendSetName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.sourceBackendSetName"></a>

```typescript
public readonly sourceBackendSetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceId">volumeAttachmentReferenceInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `volumeAttachmentReferenceInstanceId`<sup>Required</sup> <a name="volumeAttachmentReferenceInstanceId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceId"></a>

```typescript
public readonly volumeAttachmentReferenceInstanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.attachmentDetails">attachmentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.blockVolumeId">blockVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.mountDetails">mountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachmentDetails`<sup>Required</sup> <a name="attachmentDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.attachmentDetails"></a>

```typescript
public readonly attachmentDetails: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList</a>

---

##### `blockVolumeId`<sup>Required</sup> <a name="blockVolumeId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.blockVolumeId"></a>

```typescript
public readonly blockVolumeId: string;
```

- *Type:* string

---

##### `mountDetails`<sup>Required</sup> <a name="mountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.mountDetails"></a>

```typescript
public readonly mountDetails: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.destinationMountTargetId">destinationMountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.exportId">exportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationMountTargetId`<sup>Required</sup> <a name="destinationMountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.destinationMountTargetId"></a>

```typescript
public readonly destinationMountTargetId: string;
```

- *Type:* string

---

##### `exportId`<sup>Required</sup> <a name="exportId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.exportId"></a>

```typescript
public readonly exportId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.exportPath">exportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.mountDetails">mountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.unmountDetails">unmountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.exportPath"></a>

```typescript
public readonly exportPath: string;
```

- *Type:* string

---

##### `mountDetails`<sup>Required</sup> <a name="mountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.mountDetails"></a>

```typescript
public readonly mountDetails: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList</a>

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

---

##### `unmountDetails`<sup>Required</sup> <a name="unmountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.unmountDetails"></a>

```typescript
public readonly unmountDetails: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrills">autonomousDatabaseStandbyTypeForDrDrills</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.backendSetMappings">backendSetMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.blockVolumeOperations">blockVolumeOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.connectionStringType">connectionStringType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationAvailabilityDomain">destinationAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationCapacityReservationId">destinationCapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationCompartmentId">destinationCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationDedicatedVmHostId">destinationDedicatedVmHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationLoadBalancerId">destinationLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationNetworkLoadBalancerId">destinationNetworkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.exportMappings">exportMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.fileSystemOperations">fileSystemOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.isMovable">isMovable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.isRetainFaultDomain">isRetainFaultDomain</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.isStartStopEnabled">isStartStopEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.memberId">memberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.memberType">memberType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.passwordVaultSecretId">passwordVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.vnicMapping">vnicMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.vnicMappings">vnicMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autonomousDatabaseStandbyTypeForDrDrills`<sup>Required</sup> <a name="autonomousDatabaseStandbyTypeForDrDrills" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrills"></a>

```typescript
public readonly autonomousDatabaseStandbyTypeForDrDrills: string;
```

- *Type:* string

---

##### `backendSetMappings`<sup>Required</sup> <a name="backendSetMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.backendSetMappings"></a>

```typescript
public readonly backendSetMappings: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList</a>

---

##### `blockVolumeOperations`<sup>Required</sup> <a name="blockVolumeOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.blockVolumeOperations"></a>

```typescript
public readonly blockVolumeOperations: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `connectionStringType`<sup>Required</sup> <a name="connectionStringType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.connectionStringType"></a>

```typescript
public readonly connectionStringType: string;
```

- *Type:* string

---

##### `destinationAvailabilityDomain`<sup>Required</sup> <a name="destinationAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationAvailabilityDomain"></a>

```typescript
public readonly destinationAvailabilityDomain: string;
```

- *Type:* string

---

##### `destinationCapacityReservationId`<sup>Required</sup> <a name="destinationCapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationCapacityReservationId"></a>

```typescript
public readonly destinationCapacityReservationId: string;
```

- *Type:* string

---

##### `destinationCompartmentId`<sup>Required</sup> <a name="destinationCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationCompartmentId"></a>

```typescript
public readonly destinationCompartmentId: string;
```

- *Type:* string

---

##### `destinationDedicatedVmHostId`<sup>Required</sup> <a name="destinationDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationDedicatedVmHostId"></a>

```typescript
public readonly destinationDedicatedVmHostId: string;
```

- *Type:* string

---

##### `destinationLoadBalancerId`<sup>Required</sup> <a name="destinationLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationLoadBalancerId"></a>

```typescript
public readonly destinationLoadBalancerId: string;
```

- *Type:* string

---

##### `destinationNetworkLoadBalancerId`<sup>Required</sup> <a name="destinationNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationNetworkLoadBalancerId"></a>

```typescript
public readonly destinationNetworkLoadBalancerId: string;
```

- *Type:* string

---

##### `exportMappings`<sup>Required</sup> <a name="exportMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.exportMappings"></a>

```typescript
public readonly exportMappings: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList</a>

---

##### `fileSystemOperations`<sup>Required</sup> <a name="fileSystemOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.fileSystemOperations"></a>

```typescript
public readonly fileSystemOperations: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList</a>

---

##### `isMovable`<sup>Required</sup> <a name="isMovable" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.isMovable"></a>

```typescript
public readonly isMovable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRetainFaultDomain`<sup>Required</sup> <a name="isRetainFaultDomain" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.isRetainFaultDomain"></a>

```typescript
public readonly isRetainFaultDomain: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isStartStopEnabled`<sup>Required</sup> <a name="isStartStopEnabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.isStartStopEnabled"></a>

```typescript
public readonly isStartStopEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.memberId"></a>

```typescript
public readonly memberId: string;
```

- *Type:* string

---

##### `memberType`<sup>Required</sup> <a name="memberType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.memberType"></a>

```typescript
public readonly memberType: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `passwordVaultSecretId`<sup>Required</sup> <a name="passwordVaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.passwordVaultSecretId"></a>

```typescript
public readonly passwordVaultSecretId: string;
```

- *Type:* string

---

##### `vnicMapping`<sup>Required</sup> <a name="vnicMapping" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.vnicMapping"></a>

```typescript
public readonly vnicMapping: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList</a>

---

##### `vnicMappings`<sup>Required</sup> <a name="vnicMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.vnicMappings"></a>

```typescript
public readonly vnicMappings: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.destinationNsgIdList">destinationNsgIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.destinationSubnetId">destinationSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.sourceVnicId">sourceVnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationNsgIdList`<sup>Required</sup> <a name="destinationNsgIdList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.destinationNsgIdList"></a>

```typescript
public readonly destinationNsgIdList: string[];
```

- *Type:* string[]

---

##### `destinationSubnetId`<sup>Required</sup> <a name="destinationSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.destinationSubnetId"></a>

```typescript
public readonly destinationSubnetId: string;
```

- *Type:* string

---

##### `sourceVnicId`<sup>Required</sup> <a name="sourceVnicId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.sourceVnicId"></a>

```typescript
public readonly sourceVnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationNsgIdList">destinationNsgIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddress">destinationPrimaryPrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabel">destinationPrimaryPrivateIpHostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationSubnetId">destinationSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.sourceVnicId">sourceVnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationNsgIdList`<sup>Required</sup> <a name="destinationNsgIdList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationNsgIdList"></a>

```typescript
public readonly destinationNsgIdList: string[];
```

- *Type:* string[]

---

##### `destinationPrimaryPrivateIpAddress`<sup>Required</sup> <a name="destinationPrimaryPrivateIpAddress" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddress"></a>

```typescript
public readonly destinationPrimaryPrivateIpAddress: string;
```

- *Type:* string

---

##### `destinationPrimaryPrivateIpHostnameLabel`<sup>Required</sup> <a name="destinationPrimaryPrivateIpHostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabel"></a>

```typescript
public readonly destinationPrimaryPrivateIpHostnameLabel: string;
```

- *Type:* string

---

##### `destinationSubnetId`<sup>Required</sup> <a name="destinationSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationSubnetId"></a>

```typescript
public readonly destinationSubnetId: string;
```

- *Type:* string

---

##### `sourceVnicId`<sup>Required</sup> <a name="sourceVnicId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.sourceVnicId"></a>

```typescript
public readonly sourceVnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.association">association</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.disassociateTrigger">disassociateTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.lifeCycleDetails">lifeCycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.lifecycleSubState">lifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.logLocation">logLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.members">members</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.peerId">peerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.peerRegion">peerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `association`<sup>Required</sup> <a name="association" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.association"></a>

```typescript
public readonly association: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `disassociateTrigger`<sup>Required</sup> <a name="disassociateTrigger" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.disassociateTrigger"></a>

```typescript
public readonly disassociateTrigger: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifeCycleDetails`<sup>Required</sup> <a name="lifeCycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.lifeCycleDetails"></a>

```typescript
public readonly lifeCycleDetails: string;
```

- *Type:* string

---

##### `lifecycleSubState`<sup>Required</sup> <a name="lifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.lifecycleSubState"></a>

```typescript
public readonly lifecycleSubState: string;
```

- *Type:* string

---

##### `logLocation`<sup>Required</sup> <a name="logLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.logLocation"></a>

```typescript
public readonly logLocation: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList</a>

---

##### `members`<sup>Required</sup> <a name="members" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.members"></a>

```typescript
public readonly members: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList</a>

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsFilterList <a name="DataOciDisasterRecoveryDrProtectionGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.get"></a>

```typescript
public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter">DataOciDisasterRecoveryDrProtectionGroupsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDisasterRecoveryDrProtectionGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter">DataOciDisasterRecoveryDrProtectionGroupsFilter</a>[]

---


### DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDisasterRecoveryDrProtectionGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter">DataOciDisasterRecoveryDrProtectionGroupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDisasterRecoveryDrProtectionGroupsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter">DataOciDisasterRecoveryDrProtectionGroupsFilter</a>

---



