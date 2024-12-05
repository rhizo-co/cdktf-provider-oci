# `monitoringAlarmSuppression` Submodule <a name="`monitoringAlarmSuppression` Submodule" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringAlarmSuppressionA <a name="MonitoringAlarmSuppressionA" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression oci_monitoring_alarm_suppression}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

new monitoringAlarmSuppression.MonitoringAlarmSuppressionA(scope: Construct, id: string, config: MonitoringAlarmSuppressionAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig">MonitoringAlarmSuppressionAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig">MonitoringAlarmSuppressionAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget">putAlarmSuppressionTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putSuppressionConditions">putSuppressionConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetSuppressionConditions">resetSuppressionConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlarmSuppressionTarget` <a name="putAlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget"></a>

```typescript
public putAlarmSuppressionTarget(value: MonitoringAlarmSuppressionAlarmSuppressionTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

---

##### `putSuppressionConditions` <a name="putSuppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putSuppressionConditions"></a>

```typescript
public putSuppressionConditions(value: IResolvable | MonitoringAlarmSuppressionSuppressionConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putSuppressionConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitoringAlarmSuppressionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDimensions` <a name="resetDimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLevel` <a name="resetLevel" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetLevel"></a>

```typescript
public resetLevel(): void
```

##### `resetSuppressionConditions` <a name="resetSuppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetSuppressionConditions"></a>

```typescript
public resetSuppressionConditions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringAlarmSuppressionA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isConstruct"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MonitoringAlarmSuppressionA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitoringAlarmSuppressionA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitoringAlarmSuppressionA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringAlarmSuppressionA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTarget">alarmSuppressionTarget</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference">MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditions">suppressionConditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList">MonitoringAlarmSuppressionSuppressionConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference">MonitoringAlarmSuppressionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTargetInput">alarmSuppressionTargetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditionsInput">suppressionConditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFromInput">timeSuppressFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntilInput">timeSuppressUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFrom">timeSuppressFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntil">timeSuppressUntil</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alarmSuppressionTarget`<sup>Required</sup> <a name="alarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTarget"></a>

```typescript
public readonly alarmSuppressionTarget: MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference">MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `suppressionConditions`<sup>Required</sup> <a name="suppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditions"></a>

```typescript
public readonly suppressionConditions: MonitoringAlarmSuppressionSuppressionConditionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList">MonitoringAlarmSuppressionSuppressionConditionsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeouts"></a>

```typescript
public readonly timeouts: MonitoringAlarmSuppressionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference">MonitoringAlarmSuppressionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `alarmSuppressionTargetInput`<sup>Optional</sup> <a name="alarmSuppressionTargetInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTargetInput"></a>

```typescript
public readonly alarmSuppressionTargetInput: MonitoringAlarmSuppressionAlarmSuppressionTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `suppressionConditionsInput`<sup>Optional</sup> <a name="suppressionConditionsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditionsInput"></a>

```typescript
public readonly suppressionConditionsInput: IResolvable | MonitoringAlarmSuppressionSuppressionConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitoringAlarmSuppressionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>

---

##### `timeSuppressFromInput`<sup>Optional</sup> <a name="timeSuppressFromInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFromInput"></a>

```typescript
public readonly timeSuppressFromInput: string;
```

- *Type:* string

---

##### `timeSuppressUntilInput`<sup>Optional</sup> <a name="timeSuppressUntilInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntilInput"></a>

```typescript
public readonly timeSuppressUntilInput: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `timeSuppressFrom`<sup>Required</sup> <a name="timeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFrom"></a>

```typescript
public readonly timeSuppressFrom: string;
```

- *Type:* string

---

##### `timeSuppressUntil`<sup>Required</sup> <a name="timeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntil"></a>

```typescript
public readonly timeSuppressUntil: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringAlarmSuppressionAConfig <a name="MonitoringAlarmSuppressionAConfig" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.Initializer"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

const monitoringAlarmSuppressionAConfig: monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.alarmSuppressionTarget">alarmSuppressionTarget</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | alarm_suppression_target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressFrom">timeSuppressFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressUntil">timeSuppressUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.level">level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#level MonitoringAlarmSuppressionA#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.suppressionConditions">suppressionConditions</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>[]</code> | suppression_conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alarmSuppressionTarget`<sup>Required</sup> <a name="alarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.alarmSuppressionTarget"></a>

```typescript
public readonly alarmSuppressionTarget: MonitoringAlarmSuppressionAlarmSuppressionTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

alarm_suppression_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_suppression_target MonitoringAlarmSuppressionA#alarm_suppression_target}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}.

---

##### `timeSuppressFrom`<sup>Required</sup> <a name="timeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressFrom"></a>

```typescript
public readonly timeSuppressFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}.

---

##### `timeSuppressUntil`<sup>Required</sup> <a name="timeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressUntil"></a>

```typescript
public readonly timeSuppressUntil: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#level MonitoringAlarmSuppressionA#level}.

---

##### `suppressionConditions`<sup>Optional</sup> <a name="suppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.suppressionConditions"></a>

```typescript
public readonly suppressionConditions: IResolvable | MonitoringAlarmSuppressionSuppressionConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>[]

suppression_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_conditions MonitoringAlarmSuppressionA#suppression_conditions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitoringAlarmSuppressionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#timeouts MonitoringAlarmSuppressionA#timeouts}

---

### MonitoringAlarmSuppressionAlarmSuppressionTarget <a name="MonitoringAlarmSuppressionAlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.Initializer"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

const monitoringAlarmSuppressionAlarmSuppressionTarget: monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.targetType">targetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#target_type MonitoringAlarmSuppressionA#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.alarmId">alarmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_id MonitoringAlarmSuppressionA#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id MonitoringAlarmSuppressionA#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id_in_subtree MonitoringAlarmSuppressionA#compartment_id_in_subtree}. |

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#target_type MonitoringAlarmSuppressionA#target_type}.

---

##### `alarmId`<sup>Optional</sup> <a name="alarmId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.alarmId"></a>

```typescript
public readonly alarmId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_id MonitoringAlarmSuppressionA#alarm_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id MonitoringAlarmSuppressionA#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id_in_subtree MonitoringAlarmSuppressionA#compartment_id_in_subtree}.

---

### MonitoringAlarmSuppressionSuppressionConditions <a name="MonitoringAlarmSuppressionSuppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.Initializer"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

const monitoringAlarmSuppressionSuppressionConditions: monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.conditionType">conditionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#condition_type MonitoringAlarmSuppressionA#condition_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionDuration">suppressionDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_duration MonitoringAlarmSuppressionA#suppression_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionRecurrence">suppressionRecurrence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_recurrence MonitoringAlarmSuppressionA#suppression_recurrence}. |

---

##### `conditionType`<sup>Required</sup> <a name="conditionType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.conditionType"></a>

```typescript
public readonly conditionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#condition_type MonitoringAlarmSuppressionA#condition_type}.

---

##### `suppressionDuration`<sup>Required</sup> <a name="suppressionDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionDuration"></a>

```typescript
public readonly suppressionDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_duration MonitoringAlarmSuppressionA#suppression_duration}.

---

##### `suppressionRecurrence`<sup>Required</sup> <a name="suppressionRecurrence" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionRecurrence"></a>

```typescript
public readonly suppressionRecurrence: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_recurrence MonitoringAlarmSuppressionA#suppression_recurrence}.

---

### MonitoringAlarmSuppressionTimeouts <a name="MonitoringAlarmSuppressionTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.Initializer"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

const monitoringAlarmSuppressionTimeouts: monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#create MonitoringAlarmSuppressionA#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#delete MonitoringAlarmSuppressionA#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#update MonitoringAlarmSuppressionA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#create MonitoringAlarmSuppressionA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#delete MonitoringAlarmSuppressionA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#update MonitoringAlarmSuppressionA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference <a name="MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

new monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetAlarmId">resetAlarmId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarmId` <a name="resetAlarmId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetAlarmId"></a>

```typescript
public resetAlarmId(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmIdInput">alarmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetTypeInput">targetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmId">alarmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmIdInput`<sup>Optional</sup> <a name="alarmIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmIdInput"></a>

```typescript
public readonly alarmIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetTypeInput"></a>

```typescript
public readonly targetTypeInput: string;
```

- *Type:* string

---

##### `alarmId`<sup>Required</sup> <a name="alarmId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmId"></a>

```typescript
public readonly alarmId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringAlarmSuppressionAlarmSuppressionTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

---


### MonitoringAlarmSuppressionSuppressionConditionsList <a name="MonitoringAlarmSuppressionSuppressionConditionsList" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

new monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.get"></a>

```typescript
public get(index: number): MonitoringAlarmSuppressionSuppressionConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringAlarmSuppressionSuppressionConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>[]

---


### MonitoringAlarmSuppressionSuppressionConditionsOutputReference <a name="MonitoringAlarmSuppressionSuppressionConditionsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

new monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionTypeInput">conditionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDurationInput">suppressionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrenceInput">suppressionRecurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionType">conditionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDuration">suppressionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrence">suppressionRecurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionTypeInput`<sup>Optional</sup> <a name="conditionTypeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionTypeInput"></a>

```typescript
public readonly conditionTypeInput: string;
```

- *Type:* string

---

##### `suppressionDurationInput`<sup>Optional</sup> <a name="suppressionDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDurationInput"></a>

```typescript
public readonly suppressionDurationInput: string;
```

- *Type:* string

---

##### `suppressionRecurrenceInput`<sup>Optional</sup> <a name="suppressionRecurrenceInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrenceInput"></a>

```typescript
public readonly suppressionRecurrenceInput: string;
```

- *Type:* string

---

##### `conditionType`<sup>Required</sup> <a name="conditionType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionType"></a>

```typescript
public readonly conditionType: string;
```

- *Type:* string

---

##### `suppressionDuration`<sup>Required</sup> <a name="suppressionDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDuration"></a>

```typescript
public readonly suppressionDuration: string;
```

- *Type:* string

---

##### `suppressionRecurrence`<sup>Required</sup> <a name="suppressionRecurrence" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrence"></a>

```typescript
public readonly suppressionRecurrence: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringAlarmSuppressionSuppressionConditions;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>

---


### MonitoringAlarmSuppressionTimeoutsOutputReference <a name="MonitoringAlarmSuppressionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitoringAlarmSuppression } from 'rhizo-co-terraform-provider-oci'

new monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringAlarmSuppressionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>

---



