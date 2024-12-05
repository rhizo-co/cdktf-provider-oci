# `demandSignalOccDemandSignal` Submodule <a name="`demandSignalOccDemandSignal` Submodule" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DemandSignalOccDemandSignal <a name="DemandSignalOccDemandSignal" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal oci_demand_signal_occ_demand_signal}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

new demandSignalOccDemandSignal.DemandSignalOccDemandSignal(scope: Construct, id: string, config: DemandSignalOccDemandSignalConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig">DemandSignalOccDemandSignalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig">DemandSignalOccDemandSignalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals">putOccDemandSignals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations">putPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOccDemandSignalId">resetOccDemandSignalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetPatchOperations">resetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOccDemandSignals` <a name="putOccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals"></a>

```typescript
public putOccDemandSignals(value: IResolvable | DemandSignalOccDemandSignalOccDemandSignals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>[]

---

##### `putPatchOperations` <a name="putPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations"></a>

```typescript
public putPatchOperations(value: IResolvable | DemandSignalOccDemandSignalPatchOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts"></a>

```typescript
public putTimeouts(value: DemandSignalOccDemandSignalTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOccDemandSignalId` <a name="resetOccDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOccDemandSignalId"></a>

```typescript
public resetOccDemandSignalId(): void
```

##### `resetPatchOperations` <a name="resetPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetPatchOperations"></a>

```typescript
public resetPatchOperations(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DemandSignalOccDemandSignal resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DemandSignalOccDemandSignal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DemandSignalOccDemandSignal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DemandSignalOccDemandSignal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DemandSignalOccDemandSignal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignals">occDemandSignals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList">DemandSignalOccDemandSignalOccDemandSignalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperations">patchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList">DemandSignalOccDemandSignalPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference">DemandSignalOccDemandSignalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActiveInput">isActiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalIdInput">occDemandSignalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalsInput">occDemandSignalsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperationsInput">patchOperationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActive">isActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalId">occDemandSignalId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `occDemandSignals`<sup>Required</sup> <a name="occDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignals"></a>

```typescript
public readonly occDemandSignals: DemandSignalOccDemandSignalOccDemandSignalsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList">DemandSignalOccDemandSignalOccDemandSignalsList</a>

---

##### `patchOperations`<sup>Required</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperations"></a>

```typescript
public readonly patchOperations: DemandSignalOccDemandSignalPatchOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList">DemandSignalOccDemandSignalPatchOperationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeouts"></a>

```typescript
public readonly timeouts: DemandSignalOccDemandSignalTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference">DemandSignalOccDemandSignalTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActiveInput"></a>

```typescript
public readonly isActiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `occDemandSignalIdInput`<sup>Optional</sup> <a name="occDemandSignalIdInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalIdInput"></a>

```typescript
public readonly occDemandSignalIdInput: string;
```

- *Type:* string

---

##### `occDemandSignalsInput`<sup>Optional</sup> <a name="occDemandSignalsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalsInput"></a>

```typescript
public readonly occDemandSignalsInput: IResolvable | DemandSignalOccDemandSignalOccDemandSignals[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>[]

---

##### `patchOperationsInput`<sup>Optional</sup> <a name="patchOperationsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperationsInput"></a>

```typescript
public readonly patchOperationsInput: IResolvable | DemandSignalOccDemandSignalPatchOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DemandSignalOccDemandSignalTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `occDemandSignalId`<sup>Required</sup> <a name="occDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalId"></a>

```typescript
public readonly occDemandSignalId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DemandSignalOccDemandSignalConfig <a name="DemandSignalOccDemandSignalConfig" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

const demandSignalOccDemandSignalConfig: demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.isActive">isActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignals">occDemandSignals</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>[]</code> | occ_demand_signals block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignalId">occDemandSignalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.patchOperations">patchOperations</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>[]</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}.

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}.

---

##### `occDemandSignals`<sup>Required</sup> <a name="occDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignals"></a>

```typescript
public readonly occDemandSignals: IResolvable | DemandSignalOccDemandSignalOccDemandSignals[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>[]

occ_demand_signals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signals DemandSignalOccDemandSignal#occ_demand_signals}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `occDemandSignalId`<sup>Optional</sup> <a name="occDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignalId"></a>

```typescript
public readonly occDemandSignalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}.

---

##### `patchOperations`<sup>Optional</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.patchOperations"></a>

```typescript
public readonly patchOperations: IResolvable | DemandSignalOccDemandSignalPatchOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>[]

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#patch_operations DemandSignalOccDemandSignal#patch_operations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DemandSignalOccDemandSignalTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#timeouts DemandSignalOccDemandSignal#timeouts}

---

### DemandSignalOccDemandSignalOccDemandSignals <a name="DemandSignalOccDemandSignalOccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

const demandSignalOccDemandSignalOccDemandSignals: demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#resource_type DemandSignalOccDemandSignal#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.units">units</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#units DemandSignalOccDemandSignal#units}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.values">values</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>[]</code> | values block. |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#resource_type DemandSignalOccDemandSignal#resource_type}.

---

##### `units`<sup>Required</sup> <a name="units" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#units DemandSignalOccDemandSignal#units}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.values"></a>

```typescript
public readonly values: IResolvable | DemandSignalOccDemandSignalOccDemandSignalsValues[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>[]

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#values DemandSignalOccDemandSignal#values}

---

### DemandSignalOccDemandSignalOccDemandSignalsValues <a name="DemandSignalOccDemandSignalOccDemandSignalsValues" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

const demandSignalOccDemandSignalOccDemandSignalsValues: demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.timeExpected">timeExpected</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#time_expected DemandSignalOccDemandSignal#time_expected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.comments">comments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#comments DemandSignalOccDemandSignal#comments}. |

---

##### `timeExpected`<sup>Required</sup> <a name="timeExpected" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.timeExpected"></a>

```typescript
public readonly timeExpected: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#time_expected DemandSignalOccDemandSignal#time_expected}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}.

---

##### `comments`<sup>Optional</sup> <a name="comments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#comments DemandSignalOccDemandSignal#comments}.

---

### DemandSignalOccDemandSignalPatchOperations <a name="DemandSignalOccDemandSignalPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

const demandSignalOccDemandSignalPatchOperations: demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#from DemandSignalOccDemandSignal#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.operation">operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#operation DemandSignalOccDemandSignal#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selection">selection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selection DemandSignalOccDemandSignal#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.value">value</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.position">position</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#position DemandSignalOccDemandSignal#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selectedItem">selectedItem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selected_item DemandSignalOccDemandSignal#selected_item}. |

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#from DemandSignalOccDemandSignal#from}.

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#operation DemandSignalOccDemandSignal#operation}.

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selection"></a>

```typescript
public readonly selection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selection DemandSignalOccDemandSignal#selection}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.value"></a>

```typescript
public readonly value: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}.

---

##### `position`<sup>Optional</sup> <a name="position" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.position"></a>

```typescript
public readonly position: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#position DemandSignalOccDemandSignal#position}.

---

##### `selectedItem`<sup>Optional</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selectedItem"></a>

```typescript
public readonly selectedItem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selected_item DemandSignalOccDemandSignal#selected_item}.

---

### DemandSignalOccDemandSignalTimeouts <a name="DemandSignalOccDemandSignalTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

const demandSignalOccDemandSignalTimeouts: demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#create DemandSignalOccDemandSignal#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#delete DemandSignalOccDemandSignal#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#update DemandSignalOccDemandSignal#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#create DemandSignalOccDemandSignal#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#delete DemandSignalOccDemandSignal#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#update DemandSignalOccDemandSignal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DemandSignalOccDemandSignalOccDemandSignalsList <a name="DemandSignalOccDemandSignalOccDemandSignalsList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

new demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get"></a>

```typescript
public get(index: number): DemandSignalOccDemandSignalOccDemandSignalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DemandSignalOccDemandSignalOccDemandSignals[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>[]

---


### DemandSignalOccDemandSignalOccDemandSignalsOutputReference <a name="DemandSignalOccDemandSignalOccDemandSignalsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

new demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues">putValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValues` <a name="putValues" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues"></a>

```typescript
public putValues(value: IResolvable | DemandSignalOccDemandSignalOccDemandSignalsValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList">DemandSignalOccDemandSignalOccDemandSignalsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.unitsInput">unitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.valuesInput">valuesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.values"></a>

```typescript
public readonly values: DemandSignalOccDemandSignalOccDemandSignalsValuesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList">DemandSignalOccDemandSignalOccDemandSignalsValuesList</a>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.unitsInput"></a>

```typescript
public readonly unitsInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: IResolvable | DemandSignalOccDemandSignalOccDemandSignalsValues[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `units`<sup>Required</sup> <a name="units" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DemandSignalOccDemandSignalOccDemandSignals;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>

---


### DemandSignalOccDemandSignalOccDemandSignalsValuesList <a name="DemandSignalOccDemandSignalOccDemandSignalsValuesList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

new demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get"></a>

```typescript
public get(index: number): DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DemandSignalOccDemandSignalOccDemandSignalsValues[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>[]

---


### DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference <a name="DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

new demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resetComments">resetComments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComments` <a name="resetComments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resetComments"></a>

```typescript
public resetComments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.commentsInput">commentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpectedInput">timeExpectedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.comments">comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpected">timeExpected</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentsInput`<sup>Optional</sup> <a name="commentsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.commentsInput"></a>

```typescript
public readonly commentsInput: string;
```

- *Type:* string

---

##### `timeExpectedInput`<sup>Optional</sup> <a name="timeExpectedInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpectedInput"></a>

```typescript
public readonly timeExpectedInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comments`<sup>Required</sup> <a name="comments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

---

##### `timeExpected`<sup>Required</sup> <a name="timeExpected" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpected"></a>

```typescript
public readonly timeExpected: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DemandSignalOccDemandSignalOccDemandSignalsValues;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>

---


### DemandSignalOccDemandSignalPatchOperationsList <a name="DemandSignalOccDemandSignalPatchOperationsList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

new demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get"></a>

```typescript
public get(index: number): DemandSignalOccDemandSignalPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DemandSignalOccDemandSignalPatchOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>[]

---


### DemandSignalOccDemandSignalPatchOperationsOutputReference <a name="DemandSignalOccDemandSignalPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

new demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetSelectedItem">resetSelectedItem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPosition` <a name="resetPosition" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetPosition"></a>

```typescript
public resetPosition(): void
```

##### `resetSelectedItem` <a name="resetSelectedItem" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetSelectedItem"></a>

```typescript
public resetSelectedItem(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.positionInput">positionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItemInput">selectedItemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectionInput">selectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.valueInput">valueInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.position">position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItem">selectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selection">selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.value">value</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: string;
```

- *Type:* string

---

##### `selectedItemInput`<sup>Optional</sup> <a name="selectedItemInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItemInput"></a>

```typescript
public readonly selectedItemInput: string;
```

- *Type:* string

---

##### `selectionInput`<sup>Optional</sup> <a name="selectionInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectionInput"></a>

```typescript
public readonly selectionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.position"></a>

```typescript
public readonly position: string;
```

- *Type:* string

---

##### `selectedItem`<sup>Required</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItem"></a>

```typescript
public readonly selectedItem: string;
```

- *Type:* string

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selection"></a>

```typescript
public readonly selection: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.value"></a>

```typescript
public readonly value: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DemandSignalOccDemandSignalPatchOperations;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>

---


### DemandSignalOccDemandSignalTimeoutsOutputReference <a name="DemandSignalOccDemandSignalTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer"></a>

```typescript
import { demandSignalOccDemandSignal } from 'rhizo-co-terraform-provider-oci'

new demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DemandSignalOccDemandSignalTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

---



