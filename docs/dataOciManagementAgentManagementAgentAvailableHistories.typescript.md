# `dataOciManagementAgentManagementAgentAvailableHistories` Submodule <a name="`dataOciManagementAgentManagementAgentAvailableHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentAvailableHistories <a name="DataOciManagementAgentManagementAgentAvailableHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories oci_management_agent_management_agent_available_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentAvailableHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories(scope: Construct, id: string, config: DataOciManagementAgentManagementAgentAvailableHistoriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig">DataOciManagementAgentManagementAgentAvailableHistoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig">DataOciManagementAgentManagementAgentAvailableHistoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusEndedGreaterThan">resetTimeAvailabilityStatusEndedGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusStartedLessThan">resetTimeAvailabilityStatusStartedLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciManagementAgentManagementAgentAvailableHistoriesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeAvailabilityStatusEndedGreaterThan` <a name="resetTimeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusEndedGreaterThan"></a>

```typescript
public resetTimeAvailabilityStatusEndedGreaterThan(): void
```

##### `resetTimeAvailabilityStatusStartedLessThan` <a name="resetTimeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusStartedLessThan"></a>

```typescript
public resetTimeAvailabilityStatusStartedLessThan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentAvailableHistories resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct"></a>

```typescript
import { dataOciManagementAgentManagementAgentAvailableHistories } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement"></a>

```typescript
import { dataOciManagementAgentManagementAgentAvailableHistories } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource"></a>

```typescript
import { dataOciManagementAgentManagementAgentAvailableHistories } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport"></a>

```typescript
import { dataOciManagementAgentManagementAgentAvailableHistories } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentAvailableHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciManagementAgentManagementAgentAvailableHistories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciManagementAgentManagementAgentAvailableHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentAvailableHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.availabilityHistories">availabilityHistories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList">DataOciManagementAgentManagementAgentAvailableHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThanInput">timeAvailabilityStatusEndedGreaterThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThanInput">timeAvailabilityStatusStartedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThan">timeAvailabilityStatusEndedGreaterThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThan">timeAvailabilityStatusStartedLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityHistories`<sup>Required</sup> <a name="availabilityHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.availabilityHistories"></a>

```typescript
public readonly availabilityHistories: DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filter"></a>

```typescript
public readonly filter: DataOciManagementAgentManagementAgentAvailableHistoriesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList">DataOciManagementAgentManagementAgentAvailableHistoriesFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciManagementAgentManagementAgentAvailableHistoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentIdInput"></a>

```typescript
public readonly managementAgentIdInput: string;
```

- *Type:* string

---

##### `timeAvailabilityStatusEndedGreaterThanInput`<sup>Optional</sup> <a name="timeAvailabilityStatusEndedGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThanInput"></a>

```typescript
public readonly timeAvailabilityStatusEndedGreaterThanInput: string;
```

- *Type:* string

---

##### `timeAvailabilityStatusStartedLessThanInput`<sup>Optional</sup> <a name="timeAvailabilityStatusStartedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThanInput"></a>

```typescript
public readonly timeAvailabilityStatusStartedLessThanInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `timeAvailabilityStatusEndedGreaterThan`<sup>Required</sup> <a name="timeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThan"></a>

```typescript
public readonly timeAvailabilityStatusEndedGreaterThan: string;
```

- *Type:* string

---

##### `timeAvailabilityStatusStartedLessThan`<sup>Required</sup> <a name="timeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThan"></a>

```typescript
public readonly timeAvailabilityStatusStartedLessThan: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentAvailableHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories: dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories = { ... }
```


### DataOciManagementAgentManagementAgentAvailableHistoriesConfig <a name="DataOciManagementAgentManagementAgentAvailableHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentAvailableHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentAvailableHistoriesConfig: dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusEndedGreaterThan">timeAvailabilityStatusEndedGreaterThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusStartedLessThan">timeAvailabilityStatusStartedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciManagementAgentManagementAgentAvailableHistoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#filter DataOciManagementAgentManagementAgentAvailableHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeAvailabilityStatusEndedGreaterThan`<sup>Optional</sup> <a name="timeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusEndedGreaterThan"></a>

```typescript
public readonly timeAvailabilityStatusEndedGreaterThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}.

---

##### `timeAvailabilityStatusStartedLessThan`<sup>Optional</sup> <a name="timeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusStartedLessThan"></a>

```typescript
public readonly timeAvailabilityStatusStartedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}.

---

### DataOciManagementAgentManagementAgentAvailableHistoriesFilter <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentAvailableHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentAvailableHistoriesFilter: dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#name DataOciManagementAgentManagementAgentAvailableHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#values DataOciManagementAgentManagementAgentAvailableHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#regex DataOciManagementAgentManagementAgentAvailableHistories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#name DataOciManagementAgentManagementAgentAvailableHistories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#values DataOciManagementAgentManagementAgentAvailableHistories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#regex DataOciManagementAgentManagementAgentAvailableHistories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentAvailableHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentAvailableHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusEnded">timeAvailabilityStatusEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusStarted">timeAvailabilityStatusStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.availabilityStatus"></a>

```typescript
public readonly availabilityStatus: string;
```

- *Type:* string

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `timeAvailabilityStatusEnded`<sup>Required</sup> <a name="timeAvailabilityStatusEnded" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusEnded"></a>

```typescript
public readonly timeAvailabilityStatusEnded: string;
```

- *Type:* string

---

##### `timeAvailabilityStatusStarted`<sup>Required</sup> <a name="timeAvailabilityStatusStarted" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusStarted"></a>

```typescript
public readonly timeAvailabilityStatusStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories</a>

---


### DataOciManagementAgentManagementAgentAvailableHistoriesFilterList <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentAvailableHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciManagementAgentManagementAgentAvailableHistoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>[]

---


### DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentAvailableHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciManagementAgentManagementAgentAvailableHistoriesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>

---



