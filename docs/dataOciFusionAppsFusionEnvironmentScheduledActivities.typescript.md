# `dataOciFusionAppsFusionEnvironmentScheduledActivities` Submodule <a name="`dataOciFusionAppsFusionEnvironmentScheduledActivities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivities <a name="DataOciFusionAppsFusionEnvironmentScheduledActivities" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities oci_fusion_apps_fusion_environment_scheduled_activities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig">DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig">DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetRunCycle">resetRunCycle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetTimeExpectedFinishLessThanOrEqualTo">resetTimeExpectedFinishLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetTimeScheduledStartGreaterThanOrEqualTo">resetTimeScheduledStartGreaterThanOrEqualTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRunCycle` <a name="resetRunCycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetRunCycle"></a>

```typescript
public resetRunCycle(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeExpectedFinishLessThanOrEqualTo` <a name="resetTimeExpectedFinishLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetTimeExpectedFinishLessThanOrEqualTo"></a>

```typescript
public resetTimeExpectedFinishLessThanOrEqualTo(): void
```

##### `resetTimeScheduledStartGreaterThanOrEqualTo` <a name="resetTimeScheduledStartGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetTimeScheduledStartGreaterThanOrEqualTo"></a>

```typescript
public resetTimeScheduledStartGreaterThanOrEqualTo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivities resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isConstruct"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformElement"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformDataSource"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentScheduledActivities to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFusionAppsFusionEnvironmentScheduledActivities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentScheduledActivities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.scheduledActivityCollection">scheduledActivityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.runCycleInput">runCycleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeExpectedFinishLessThanOrEqualToInput">timeExpectedFinishLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeScheduledStartGreaterThanOrEqualToInput">timeScheduledStartGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.runCycle">runCycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeExpectedFinishLessThanOrEqualTo">timeExpectedFinishLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeScheduledStartGreaterThanOrEqualTo">timeScheduledStartGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.filter"></a>

```typescript
public readonly filter: DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList</a>

---

##### `scheduledActivityCollection`<sup>Required</sup> <a name="scheduledActivityCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.scheduledActivityCollection"></a>

```typescript
public readonly scheduledActivityCollection: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter</a>[]

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.fusionEnvironmentIdInput"></a>

```typescript
public readonly fusionEnvironmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `runCycleInput`<sup>Optional</sup> <a name="runCycleInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.runCycleInput"></a>

```typescript
public readonly runCycleInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeExpectedFinishLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeExpectedFinishLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeExpectedFinishLessThanOrEqualToInput"></a>

```typescript
public readonly timeExpectedFinishLessThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeScheduledStartGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeScheduledStartGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeScheduledStartGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeScheduledStartGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `runCycle`<sup>Required</sup> <a name="runCycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.runCycle"></a>

```typescript
public readonly runCycle: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeExpectedFinishLessThanOrEqualTo`<sup>Required</sup> <a name="timeExpectedFinishLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeExpectedFinishLessThanOrEqualTo"></a>

```typescript
public readonly timeExpectedFinishLessThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeScheduledStartGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeScheduledStartGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeScheduledStartGreaterThanOrEqualTo"></a>

```typescript
public readonly timeScheduledStartGreaterThanOrEqualTo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig: dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivities#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#display_name DataOciFusionAppsFusionEnvironmentScheduledActivities#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#id DataOciFusionAppsFusionEnvironmentScheduledActivities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.runCycle">runCycle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#run_cycle DataOciFusionAppsFusionEnvironmentScheduledActivities#run_cycle}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#state DataOciFusionAppsFusionEnvironmentScheduledActivities#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.timeExpectedFinishLessThanOrEqualTo">timeExpectedFinishLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#time_expected_finish_less_than_or_equal_to DataOciFusionAppsFusionEnvironmentScheduledActivities#time_expected_finish_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.timeScheduledStartGreaterThanOrEqualTo">timeScheduledStartGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#time_scheduled_start_greater_than_or_equal_to DataOciFusionAppsFusionEnvironmentScheduledActivities#time_scheduled_start_greater_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivities#fusion_environment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#display_name DataOciFusionAppsFusionEnvironmentScheduledActivities#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#filter DataOciFusionAppsFusionEnvironmentScheduledActivities#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#id DataOciFusionAppsFusionEnvironmentScheduledActivities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runCycle`<sup>Optional</sup> <a name="runCycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.runCycle"></a>

```typescript
public readonly runCycle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#run_cycle DataOciFusionAppsFusionEnvironmentScheduledActivities#run_cycle}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#state DataOciFusionAppsFusionEnvironmentScheduledActivities#state}.

---

##### `timeExpectedFinishLessThanOrEqualTo`<sup>Optional</sup> <a name="timeExpectedFinishLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.timeExpectedFinishLessThanOrEqualTo"></a>

```typescript
public readonly timeExpectedFinishLessThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#time_expected_finish_less_than_or_equal_to DataOciFusionAppsFusionEnvironmentScheduledActivities#time_expected_finish_less_than_or_equal_to}.

---

##### `timeScheduledStartGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeScheduledStartGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.timeScheduledStartGreaterThanOrEqualTo"></a>

```typescript
public readonly timeScheduledStartGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#time_scheduled_start_greater_than_or_equal_to DataOciFusionAppsFusionEnvironmentScheduledActivities#time_scheduled_start_greater_than_or_equal_to}.

---

### DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter: dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#name DataOciFusionAppsFusionEnvironmentScheduledActivities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#values DataOciFusionAppsFusionEnvironmentScheduledActivities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#regex DataOciFusionAppsFusionEnvironmentScheduledActivities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#name DataOciFusionAppsFusionEnvironmentScheduledActivities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#values DataOciFusionAppsFusionEnvironmentScheduledActivities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#regex DataOciFusionAppsFusionEnvironmentScheduledActivities#regex}.

---

### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection: dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection = { ... }
```


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems: dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems = { ... }
```


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions: dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter</a>[]

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter</a>

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.artifact">artifact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.referenceKey">referenceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `artifact`<sup>Required</sup> <a name="artifact" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.artifact"></a>

```typescript
public readonly artifact: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

---

##### `referenceKey`<sup>Required</sup> <a name="referenceKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.referenceKey"></a>

```typescript
public readonly referenceKey: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions</a>

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.delayInHours">delayInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.runCycle">runCycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.serviceAvailability">serviceAvailability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeAccepted">timeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeExpectedFinish">timeExpectedFinish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeScheduledStart">timeScheduledStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.actions"></a>

```typescript
public readonly actions: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList</a>

---

##### `delayInHours`<sup>Required</sup> <a name="delayInHours" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.delayInHours"></a>

```typescript
public readonly delayInHours: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `runCycle`<sup>Required</sup> <a name="runCycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.runCycle"></a>

```typescript
public readonly runCycle: string;
```

- *Type:* string

---

##### `serviceAvailability`<sup>Required</sup> <a name="serviceAvailability" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.serviceAvailability"></a>

```typescript
public readonly serviceAvailability: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeAccepted"></a>

```typescript
public readonly timeAccepted: string;
```

- *Type:* string

---

##### `timeExpectedFinish`<sup>Required</sup> <a name="timeExpectedFinish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeExpectedFinish"></a>

```typescript
public readonly timeExpectedFinish: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeScheduledStart`<sup>Required</sup> <a name="timeScheduledStart" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeScheduledStart"></a>

```typescript
public readonly timeScheduledStart: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivities } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection</a>

---



