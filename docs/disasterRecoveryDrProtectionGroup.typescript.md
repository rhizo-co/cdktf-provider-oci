# `disasterRecoveryDrProtectionGroup` Submodule <a name="`disasterRecoveryDrProtectionGroup` Submodule" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryDrProtectionGroup <a name="DisasterRecoveryDrProtectionGroup" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group oci_disaster_recovery_dr_protection_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup(scope: Construct, id: string, config: DisasterRecoveryDrProtectionGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig">DisasterRecoveryDrProtectionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig">DisasterRecoveryDrProtectionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putAssociation">putAssociation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putLogLocation">putLogLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putMembers">putMembers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetAssociation">resetAssociation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetDisassociateTrigger">resetDisassociateTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociation` <a name="putAssociation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putAssociation"></a>

```typescript
public putAssociation(value: DisasterRecoveryDrProtectionGroupAssociation): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putAssociation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a>

---

##### `putLogLocation` <a name="putLogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putLogLocation"></a>

```typescript
public putLogLocation(value: DisasterRecoveryDrProtectionGroupLogLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putLogLocation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a>

---

##### `putMembers` <a name="putMembers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putMembers"></a>

```typescript
public putMembers(value: IResolvable | DisasterRecoveryDrProtectionGroupMembers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putMembers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers">DisasterRecoveryDrProtectionGroupMembers</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: DisasterRecoveryDrProtectionGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts">DisasterRecoveryDrProtectionGroupTimeouts</a>

---

##### `resetAssociation` <a name="resetAssociation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetAssociation"></a>

```typescript
public resetAssociation(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisassociateTrigger` <a name="resetDisassociateTrigger" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetDisassociateTrigger"></a>

```typescript
public resetDisassociateTrigger(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMembers` <a name="resetMembers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetMembers"></a>

```typescript
public resetMembers(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DisasterRecoveryDrProtectionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isConstruct"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformElement"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformResource"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DisasterRecoveryDrProtectionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DisasterRecoveryDrProtectionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DisasterRecoveryDrProtectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryDrProtectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.association">association</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference">DisasterRecoveryDrProtectionGroupAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.lifeCycleDetails">lifeCycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.lifecycleSubState">lifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.logLocation">logLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference">DisasterRecoveryDrProtectionGroupLogLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.members">members</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList">DisasterRecoveryDrProtectionGroupMembersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.peerId">peerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.peerRegion">peerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference">DisasterRecoveryDrProtectionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.associationInput">associationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.disassociateTriggerInput">disassociateTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.logLocationInput">logLocationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.membersInput">membersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers">DisasterRecoveryDrProtectionGroupMembers</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts">DisasterRecoveryDrProtectionGroupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.disassociateTrigger">disassociateTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `association`<sup>Required</sup> <a name="association" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.association"></a>

```typescript
public readonly association: DisasterRecoveryDrProtectionGroupAssociationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference">DisasterRecoveryDrProtectionGroupAssociationOutputReference</a>

---

##### `lifeCycleDetails`<sup>Required</sup> <a name="lifeCycleDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.lifeCycleDetails"></a>

```typescript
public readonly lifeCycleDetails: string;
```

- *Type:* string

---

##### `lifecycleSubState`<sup>Required</sup> <a name="lifecycleSubState" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.lifecycleSubState"></a>

```typescript
public readonly lifecycleSubState: string;
```

- *Type:* string

---

##### `logLocation`<sup>Required</sup> <a name="logLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.logLocation"></a>

```typescript
public readonly logLocation: DisasterRecoveryDrProtectionGroupLogLocationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference">DisasterRecoveryDrProtectionGroupLogLocationOutputReference</a>

---

##### `members`<sup>Required</sup> <a name="members" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.members"></a>

```typescript
public readonly members: DisasterRecoveryDrProtectionGroupMembersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList">DisasterRecoveryDrProtectionGroupMembersList</a>

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DisasterRecoveryDrProtectionGroupTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference">DisasterRecoveryDrProtectionGroupTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `associationInput`<sup>Optional</sup> <a name="associationInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.associationInput"></a>

```typescript
public readonly associationInput: DisasterRecoveryDrProtectionGroupAssociation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disassociateTriggerInput`<sup>Optional</sup> <a name="disassociateTriggerInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.disassociateTriggerInput"></a>

```typescript
public readonly disassociateTriggerInput: number;
```

- *Type:* number

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logLocationInput`<sup>Optional</sup> <a name="logLocationInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.logLocationInput"></a>

```typescript
public readonly logLocationInput: DisasterRecoveryDrProtectionGroupLogLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a>

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.membersInput"></a>

```typescript
public readonly membersInput: IResolvable | DisasterRecoveryDrProtectionGroupMembers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers">DisasterRecoveryDrProtectionGroupMembers</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DisasterRecoveryDrProtectionGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts">DisasterRecoveryDrProtectionGroupTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disassociateTrigger`<sup>Required</sup> <a name="disassociateTrigger" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.disassociateTrigger"></a>

```typescript
public readonly disassociateTrigger: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryDrProtectionGroupAssociation <a name="DisasterRecoveryDrProtectionGroupAssociation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupAssociation: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#role DisasterRecoveryDrProtectionGroup#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.property.peerId">peerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#peer_id DisasterRecoveryDrProtectionGroup#peer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.property.peerRegion">peerRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#peer_region DisasterRecoveryDrProtectionGroup#peer_region}. |

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#role DisasterRecoveryDrProtectionGroup#role}.

---

##### `peerId`<sup>Optional</sup> <a name="peerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#peer_id DisasterRecoveryDrProtectionGroup#peer_id}.

---

##### `peerRegion`<sup>Optional</sup> <a name="peerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#peer_region DisasterRecoveryDrProtectionGroup#peer_region}.

---

### DisasterRecoveryDrProtectionGroupConfig <a name="DisasterRecoveryDrProtectionGroupConfig" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupConfig: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#compartment_id DisasterRecoveryDrProtectionGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#display_name DisasterRecoveryDrProtectionGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.logLocation">logLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a></code> | log_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.association">association</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a></code> | association block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#defined_tags DisasterRecoveryDrProtectionGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.disassociateTrigger">disassociateTrigger</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#disassociate_trigger DisasterRecoveryDrProtectionGroup#disassociate_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#freeform_tags DisasterRecoveryDrProtectionGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#id DisasterRecoveryDrProtectionGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.members">members</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers">DisasterRecoveryDrProtectionGroupMembers</a>[]</code> | members block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts">DisasterRecoveryDrProtectionGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#compartment_id DisasterRecoveryDrProtectionGroup#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#display_name DisasterRecoveryDrProtectionGroup#display_name}.

---

##### `logLocation`<sup>Required</sup> <a name="logLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.logLocation"></a>

```typescript
public readonly logLocation: DisasterRecoveryDrProtectionGroupLogLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a>

log_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#log_location DisasterRecoveryDrProtectionGroup#log_location}

---

##### `association`<sup>Optional</sup> <a name="association" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.association"></a>

```typescript
public readonly association: DisasterRecoveryDrProtectionGroupAssociation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a>

association block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#association DisasterRecoveryDrProtectionGroup#association}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#defined_tags DisasterRecoveryDrProtectionGroup#defined_tags}.

---

##### `disassociateTrigger`<sup>Optional</sup> <a name="disassociateTrigger" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.disassociateTrigger"></a>

```typescript
public readonly disassociateTrigger: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#disassociate_trigger DisasterRecoveryDrProtectionGroup#disassociate_trigger}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#freeform_tags DisasterRecoveryDrProtectionGroup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#id DisasterRecoveryDrProtectionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `members`<sup>Optional</sup> <a name="members" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.members"></a>

```typescript
public readonly members: IResolvable | DisasterRecoveryDrProtectionGroupMembers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers">DisasterRecoveryDrProtectionGroupMembers</a>[]

members block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#members DisasterRecoveryDrProtectionGroup#members}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DisasterRecoveryDrProtectionGroupTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts">DisasterRecoveryDrProtectionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#timeouts DisasterRecoveryDrProtectionGroup#timeouts}

---

### DisasterRecoveryDrProtectionGroupLogLocation <a name="DisasterRecoveryDrProtectionGroupLogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupLogLocation: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#bucket DisasterRecoveryDrProtectionGroup#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#namespace DisasterRecoveryDrProtectionGroup#namespace}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#bucket DisasterRecoveryDrProtectionGroup#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#namespace DisasterRecoveryDrProtectionGroup#namespace}.

---

### DisasterRecoveryDrProtectionGroupMembers <a name="DisasterRecoveryDrProtectionGroupMembers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupMembers: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.memberId">memberId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#member_id DisasterRecoveryDrProtectionGroup#member_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.memberType">memberType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#member_type DisasterRecoveryDrProtectionGroup#member_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.autonomousDatabaseStandbyTypeForDrDrills">autonomousDatabaseStandbyTypeForDrDrills</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#autonomous_database_standby_type_for_dr_drills DisasterRecoveryDrProtectionGroup#autonomous_database_standby_type_for_dr_drills}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.backendSetMappings">backendSetMappings</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a>[]</code> | backend_set_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.blockVolumeOperations">blockVolumeOperations</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a>[]</code> | block_volume_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#bucket DisasterRecoveryDrProtectionGroup#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.connectionStringType">connectionStringType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#connection_string_type DisasterRecoveryDrProtectionGroup#connection_string_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationAvailabilityDomain">destinationAvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_availability_domain DisasterRecoveryDrProtectionGroup#destination_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationCapacityReservationId">destinationCapacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_capacity_reservation_id DisasterRecoveryDrProtectionGroup#destination_capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationCompartmentId">destinationCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_compartment_id DisasterRecoveryDrProtectionGroup#destination_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationDedicatedVmHostId">destinationDedicatedVmHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_dedicated_vm_host_id DisasterRecoveryDrProtectionGroup#destination_dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationLoadBalancerId">destinationLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationNetworkLoadBalancerId">destinationNetworkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_network_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.exportMappings">exportMappings</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings">DisasterRecoveryDrProtectionGroupMembersExportMappings</a>[]</code> | export_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.fileSystemOperations">fileSystemOperations</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a>[]</code> | file_system_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.isMovable">isMovable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_movable DisasterRecoveryDrProtectionGroup#is_movable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.isRetainFaultDomain">isRetainFaultDomain</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_retain_fault_domain DisasterRecoveryDrProtectionGroup#is_retain_fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.isStartStopEnabled">isStartStopEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_start_stop_enabled DisasterRecoveryDrProtectionGroup#is_start_stop_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#namespace DisasterRecoveryDrProtectionGroup#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.passwordVaultSecretId">passwordVaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#password_vault_secret_id DisasterRecoveryDrProtectionGroup#password_vault_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.vnicMapping">vnicMapping</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping">DisasterRecoveryDrProtectionGroupMembersVnicMapping</a>[]</code> | vnic_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.vnicMappings">vnicMappings</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings">DisasterRecoveryDrProtectionGroupMembersVnicMappings</a>[]</code> | vnic_mappings block. |

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.memberId"></a>

```typescript
public readonly memberId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#member_id DisasterRecoveryDrProtectionGroup#member_id}.

---

##### `memberType`<sup>Required</sup> <a name="memberType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.memberType"></a>

```typescript
public readonly memberType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#member_type DisasterRecoveryDrProtectionGroup#member_type}.

---

##### `autonomousDatabaseStandbyTypeForDrDrills`<sup>Optional</sup> <a name="autonomousDatabaseStandbyTypeForDrDrills" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.autonomousDatabaseStandbyTypeForDrDrills"></a>

```typescript
public readonly autonomousDatabaseStandbyTypeForDrDrills: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#autonomous_database_standby_type_for_dr_drills DisasterRecoveryDrProtectionGroup#autonomous_database_standby_type_for_dr_drills}.

---

##### `backendSetMappings`<sup>Optional</sup> <a name="backendSetMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.backendSetMappings"></a>

```typescript
public readonly backendSetMappings: IResolvable | DisasterRecoveryDrProtectionGroupMembersBackendSetMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a>[]

backend_set_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#backend_set_mappings DisasterRecoveryDrProtectionGroup#backend_set_mappings}

---

##### `blockVolumeOperations`<sup>Optional</sup> <a name="blockVolumeOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.blockVolumeOperations"></a>

```typescript
public readonly blockVolumeOperations: IResolvable | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a>[]

block_volume_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#block_volume_operations DisasterRecoveryDrProtectionGroup#block_volume_operations}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#bucket DisasterRecoveryDrProtectionGroup#bucket}.

---

##### `connectionStringType`<sup>Optional</sup> <a name="connectionStringType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.connectionStringType"></a>

```typescript
public readonly connectionStringType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#connection_string_type DisasterRecoveryDrProtectionGroup#connection_string_type}.

---

##### `destinationAvailabilityDomain`<sup>Optional</sup> <a name="destinationAvailabilityDomain" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationAvailabilityDomain"></a>

```typescript
public readonly destinationAvailabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_availability_domain DisasterRecoveryDrProtectionGroup#destination_availability_domain}.

---

##### `destinationCapacityReservationId`<sup>Optional</sup> <a name="destinationCapacityReservationId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationCapacityReservationId"></a>

```typescript
public readonly destinationCapacityReservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_capacity_reservation_id DisasterRecoveryDrProtectionGroup#destination_capacity_reservation_id}.

---

##### `destinationCompartmentId`<sup>Optional</sup> <a name="destinationCompartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationCompartmentId"></a>

```typescript
public readonly destinationCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_compartment_id DisasterRecoveryDrProtectionGroup#destination_compartment_id}.

---

##### `destinationDedicatedVmHostId`<sup>Optional</sup> <a name="destinationDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationDedicatedVmHostId"></a>

```typescript
public readonly destinationDedicatedVmHostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_dedicated_vm_host_id DisasterRecoveryDrProtectionGroup#destination_dedicated_vm_host_id}.

---

##### `destinationLoadBalancerId`<sup>Optional</sup> <a name="destinationLoadBalancerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationLoadBalancerId"></a>

```typescript
public readonly destinationLoadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_load_balancer_id}.

---

##### `destinationNetworkLoadBalancerId`<sup>Optional</sup> <a name="destinationNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.destinationNetworkLoadBalancerId"></a>

```typescript
public readonly destinationNetworkLoadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_network_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_network_load_balancer_id}.

---

##### `exportMappings`<sup>Optional</sup> <a name="exportMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.exportMappings"></a>

```typescript
public readonly exportMappings: IResolvable | DisasterRecoveryDrProtectionGroupMembersExportMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings">DisasterRecoveryDrProtectionGroupMembersExportMappings</a>[]

export_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#export_mappings DisasterRecoveryDrProtectionGroup#export_mappings}

---

##### `fileSystemOperations`<sup>Optional</sup> <a name="fileSystemOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.fileSystemOperations"></a>

```typescript
public readonly fileSystemOperations: IResolvable | DisasterRecoveryDrProtectionGroupMembersFileSystemOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a>[]

file_system_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#file_system_operations DisasterRecoveryDrProtectionGroup#file_system_operations}

---

##### `isMovable`<sup>Optional</sup> <a name="isMovable" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.isMovable"></a>

```typescript
public readonly isMovable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_movable DisasterRecoveryDrProtectionGroup#is_movable}.

---

##### `isRetainFaultDomain`<sup>Optional</sup> <a name="isRetainFaultDomain" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.isRetainFaultDomain"></a>

```typescript
public readonly isRetainFaultDomain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_retain_fault_domain DisasterRecoveryDrProtectionGroup#is_retain_fault_domain}.

---

##### `isStartStopEnabled`<sup>Optional</sup> <a name="isStartStopEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.isStartStopEnabled"></a>

```typescript
public readonly isStartStopEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_start_stop_enabled DisasterRecoveryDrProtectionGroup#is_start_stop_enabled}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#namespace DisasterRecoveryDrProtectionGroup#namespace}.

---

##### `passwordVaultSecretId`<sup>Optional</sup> <a name="passwordVaultSecretId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.passwordVaultSecretId"></a>

```typescript
public readonly passwordVaultSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#password_vault_secret_id DisasterRecoveryDrProtectionGroup#password_vault_secret_id}.

---

##### `vnicMapping`<sup>Optional</sup> <a name="vnicMapping" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.vnicMapping"></a>

```typescript
public readonly vnicMapping: IResolvable | DisasterRecoveryDrProtectionGroupMembersVnicMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping">DisasterRecoveryDrProtectionGroupMembersVnicMapping</a>[]

vnic_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#vnic_mapping DisasterRecoveryDrProtectionGroup#vnic_mapping}

---

##### `vnicMappings`<sup>Optional</sup> <a name="vnicMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers.property.vnicMappings"></a>

```typescript
public readonly vnicMappings: IResolvable | DisasterRecoveryDrProtectionGroupMembersVnicMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings">DisasterRecoveryDrProtectionGroupMembersVnicMappings</a>[]

vnic_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#vnic_mappings DisasterRecoveryDrProtectionGroup#vnic_mappings}

---

### DisasterRecoveryDrProtectionGroupMembersBackendSetMappings <a name="DisasterRecoveryDrProtectionGroupMembersBackendSetMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupMembersBackendSetMappings: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.property.destinationBackendSetName">destinationBackendSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_backend_set_name DisasterRecoveryDrProtectionGroup#destination_backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.property.isBackendSetForNonMovable">isBackendSetForNonMovable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_backend_set_for_non_movable DisasterRecoveryDrProtectionGroup#is_backend_set_for_non_movable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.property.sourceBackendSetName">sourceBackendSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#source_backend_set_name DisasterRecoveryDrProtectionGroup#source_backend_set_name}. |

---

##### `destinationBackendSetName`<sup>Optional</sup> <a name="destinationBackendSetName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.property.destinationBackendSetName"></a>

```typescript
public readonly destinationBackendSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_backend_set_name DisasterRecoveryDrProtectionGroup#destination_backend_set_name}.

---

##### `isBackendSetForNonMovable`<sup>Optional</sup> <a name="isBackendSetForNonMovable" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.property.isBackendSetForNonMovable"></a>

```typescript
public readonly isBackendSetForNonMovable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#is_backend_set_for_non_movable DisasterRecoveryDrProtectionGroup#is_backend_set_for_non_movable}.

---

##### `sourceBackendSetName`<sup>Optional</sup> <a name="sourceBackendSetName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings.property.sourceBackendSetName"></a>

```typescript
public readonly sourceBackendSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#source_backend_set_name DisasterRecoveryDrProtectionGroup#source_backend_set_name}.

---

### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupMembersBlockVolumeOperations: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.property.attachmentDetails">attachmentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a></code> | attachment_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.property.blockVolumeId">blockVolumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#block_volume_id DisasterRecoveryDrProtectionGroup#block_volume_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.property.mountDetails">mountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a></code> | mount_details block. |

---

##### `attachmentDetails`<sup>Optional</sup> <a name="attachmentDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.property.attachmentDetails"></a>

```typescript
public readonly attachmentDetails: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a>

attachment_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#attachment_details DisasterRecoveryDrProtectionGroup#attachment_details}

---

##### `blockVolumeId`<sup>Optional</sup> <a name="blockVolumeId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.property.blockVolumeId"></a>

```typescript
public readonly blockVolumeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#block_volume_id DisasterRecoveryDrProtectionGroup#block_volume_id}.

---

##### `mountDetails`<sup>Optional</sup> <a name="mountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.property.mountDetails"></a>

```typescript
public readonly mountDetails: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a>

mount_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_details DisasterRecoveryDrProtectionGroup#mount_details}

---

### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails.property.volumeAttachmentReferenceInstanceId">volumeAttachmentReferenceInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#volume_attachment_reference_instance_id DisasterRecoveryDrProtectionGroup#volume_attachment_reference_instance_id}. |

---

##### `volumeAttachmentReferenceInstanceId`<sup>Optional</sup> <a name="volumeAttachmentReferenceInstanceId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails.property.volumeAttachmentReferenceInstanceId"></a>

```typescript
public readonly volumeAttachmentReferenceInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#volume_attachment_reference_instance_id DisasterRecoveryDrProtectionGroup#volume_attachment_reference_instance_id}.

---

### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails.property.mountPoint">mountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}. |

---

##### `mountPoint`<sup>Optional</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}.

---

### DisasterRecoveryDrProtectionGroupMembersExportMappings <a name="DisasterRecoveryDrProtectionGroupMembersExportMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupMembersExportMappings: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings.property.destinationMountTargetId">destinationMountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_mount_target_id DisasterRecoveryDrProtectionGroup#destination_mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings.property.exportId">exportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#export_id DisasterRecoveryDrProtectionGroup#export_id}. |

---

##### `destinationMountTargetId`<sup>Optional</sup> <a name="destinationMountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings.property.destinationMountTargetId"></a>

```typescript
public readonly destinationMountTargetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_mount_target_id DisasterRecoveryDrProtectionGroup#destination_mount_target_id}.

---

##### `exportId`<sup>Optional</sup> <a name="exportId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings.property.exportId"></a>

```typescript
public readonly exportId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#export_id DisasterRecoveryDrProtectionGroup#export_id}.

---

### DisasterRecoveryDrProtectionGroupMembersFileSystemOperations <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupMembersFileSystemOperations: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.exportPath">exportPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#export_path DisasterRecoveryDrProtectionGroup#export_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.mountDetails">mountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a></code> | mount_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.mountPoint">mountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.unmountDetails">unmountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a></code> | unmount_details block. |

---

##### `exportPath`<sup>Optional</sup> <a name="exportPath" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.exportPath"></a>

```typescript
public readonly exportPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#export_path DisasterRecoveryDrProtectionGroup#export_path}.

---

##### `mountDetails`<sup>Optional</sup> <a name="mountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.mountDetails"></a>

```typescript
public readonly mountDetails: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a>

mount_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_details DisasterRecoveryDrProtectionGroup#mount_details}

---

##### `mountPoint`<sup>Optional</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}.

---

##### `mountTargetId`<sup>Optional</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}.

---

##### `unmountDetails`<sup>Optional</sup> <a name="unmountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations.property.unmountDetails"></a>

```typescript
public readonly unmountDetails: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a>

unmount_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#unmount_details DisasterRecoveryDrProtectionGroup#unmount_details}

---

### DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}. |

---

##### `mountTargetId`<sup>Optional</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}.

---

### DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}. |

---

##### `mountTargetId`<sup>Optional</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}.

---

### DisasterRecoveryDrProtectionGroupMembersVnicMapping <a name="DisasterRecoveryDrProtectionGroupMembersVnicMapping" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupMembersVnicMapping: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.property.destinationNsgIdList">destinationNsgIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_nsg_id_list DisasterRecoveryDrProtectionGroup#destination_nsg_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.property.destinationSubnetId">destinationSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_subnet_id DisasterRecoveryDrProtectionGroup#destination_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.property.sourceVnicId">sourceVnicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#source_vnic_id DisasterRecoveryDrProtectionGroup#source_vnic_id}. |

---

##### `destinationNsgIdList`<sup>Optional</sup> <a name="destinationNsgIdList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.property.destinationNsgIdList"></a>

```typescript
public readonly destinationNsgIdList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_nsg_id_list DisasterRecoveryDrProtectionGroup#destination_nsg_id_list}.

---

##### `destinationSubnetId`<sup>Optional</sup> <a name="destinationSubnetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.property.destinationSubnetId"></a>

```typescript
public readonly destinationSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_subnet_id DisasterRecoveryDrProtectionGroup#destination_subnet_id}.

---

##### `sourceVnicId`<sup>Optional</sup> <a name="sourceVnicId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping.property.sourceVnicId"></a>

```typescript
public readonly sourceVnicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#source_vnic_id DisasterRecoveryDrProtectionGroup#source_vnic_id}.

---

### DisasterRecoveryDrProtectionGroupMembersVnicMappings <a name="DisasterRecoveryDrProtectionGroupMembersVnicMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupMembersVnicMappings: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationNsgIdList">destinationNsgIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_nsg_id_list DisasterRecoveryDrProtectionGroup#destination_nsg_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationPrimaryPrivateIpAddress">destinationPrimaryPrivateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_primary_private_ip_address DisasterRecoveryDrProtectionGroup#destination_primary_private_ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationPrimaryPrivateIpHostnameLabel">destinationPrimaryPrivateIpHostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_primary_private_ip_hostname_label DisasterRecoveryDrProtectionGroup#destination_primary_private_ip_hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationSubnetId">destinationSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_subnet_id DisasterRecoveryDrProtectionGroup#destination_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.sourceVnicId">sourceVnicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#source_vnic_id DisasterRecoveryDrProtectionGroup#source_vnic_id}. |

---

##### `destinationNsgIdList`<sup>Optional</sup> <a name="destinationNsgIdList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationNsgIdList"></a>

```typescript
public readonly destinationNsgIdList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_nsg_id_list DisasterRecoveryDrProtectionGroup#destination_nsg_id_list}.

---

##### `destinationPrimaryPrivateIpAddress`<sup>Optional</sup> <a name="destinationPrimaryPrivateIpAddress" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationPrimaryPrivateIpAddress"></a>

```typescript
public readonly destinationPrimaryPrivateIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_primary_private_ip_address DisasterRecoveryDrProtectionGroup#destination_primary_private_ip_address}.

---

##### `destinationPrimaryPrivateIpHostnameLabel`<sup>Optional</sup> <a name="destinationPrimaryPrivateIpHostnameLabel" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationPrimaryPrivateIpHostnameLabel"></a>

```typescript
public readonly destinationPrimaryPrivateIpHostnameLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_primary_private_ip_hostname_label DisasterRecoveryDrProtectionGroup#destination_primary_private_ip_hostname_label}.

---

##### `destinationSubnetId`<sup>Optional</sup> <a name="destinationSubnetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.destinationSubnetId"></a>

```typescript
public readonly destinationSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#destination_subnet_id DisasterRecoveryDrProtectionGroup#destination_subnet_id}.

---

##### `sourceVnicId`<sup>Optional</sup> <a name="sourceVnicId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings.property.sourceVnicId"></a>

```typescript
public readonly sourceVnicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#source_vnic_id DisasterRecoveryDrProtectionGroup#source_vnic_id}.

---

### DisasterRecoveryDrProtectionGroupTimeouts <a name="DisasterRecoveryDrProtectionGroupTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrProtectionGroupTimeouts: disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#create DisasterRecoveryDrProtectionGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#delete DisasterRecoveryDrProtectionGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#update DisasterRecoveryDrProtectionGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#create DisasterRecoveryDrProtectionGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#delete DisasterRecoveryDrProtectionGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_protection_group#update DisasterRecoveryDrProtectionGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisasterRecoveryDrProtectionGroupAssociationOutputReference <a name="DisasterRecoveryDrProtectionGroupAssociationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resetPeerId">resetPeerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resetPeerRegion">resetPeerRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeerId` <a name="resetPeerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resetPeerId"></a>

```typescript
public resetPeerId(): void
```

##### `resetPeerRegion` <a name="resetPeerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.resetPeerRegion"></a>

```typescript
public resetPeerRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerIdInput">peerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerRegionInput">peerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerId">peerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerRegion">peerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peerIdInput`<sup>Optional</sup> <a name="peerIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerIdInput"></a>

```typescript
public readonly peerIdInput: string;
```

- *Type:* string

---

##### `peerRegionInput`<sup>Optional</sup> <a name="peerRegionInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerRegionInput"></a>

```typescript
public readonly peerRegionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisasterRecoveryDrProtectionGroupAssociation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupAssociation">DisasterRecoveryDrProtectionGroupAssociation</a>

---


### DisasterRecoveryDrProtectionGroupLogLocationOutputReference <a name="DisasterRecoveryDrProtectionGroupLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisasterRecoveryDrProtectionGroupLogLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupLogLocation">DisasterRecoveryDrProtectionGroupLogLocation</a>

---


### DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList <a name="DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.get"></a>

```typescript
public get(index: number): DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembersBackendSetMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a>[]

---


### DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resetDestinationBackendSetName">resetDestinationBackendSetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resetIsBackendSetForNonMovable">resetIsBackendSetForNonMovable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resetSourceBackendSetName">resetSourceBackendSetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationBackendSetName` <a name="resetDestinationBackendSetName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resetDestinationBackendSetName"></a>

```typescript
public resetDestinationBackendSetName(): void
```

##### `resetIsBackendSetForNonMovable` <a name="resetIsBackendSetForNonMovable" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resetIsBackendSetForNonMovable"></a>

```typescript
public resetIsBackendSetForNonMovable(): void
```

##### `resetSourceBackendSetName` <a name="resetSourceBackendSetName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resetSourceBackendSetName"></a>

```typescript
public resetSourceBackendSetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.destinationBackendSetNameInput">destinationBackendSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovableInput">isBackendSetForNonMovableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.sourceBackendSetNameInput">sourceBackendSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.destinationBackendSetName">destinationBackendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovable">isBackendSetForNonMovable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.sourceBackendSetName">sourceBackendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationBackendSetNameInput`<sup>Optional</sup> <a name="destinationBackendSetNameInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.destinationBackendSetNameInput"></a>

```typescript
public readonly destinationBackendSetNameInput: string;
```

- *Type:* string

---

##### `isBackendSetForNonMovableInput`<sup>Optional</sup> <a name="isBackendSetForNonMovableInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovableInput"></a>

```typescript
public readonly isBackendSetForNonMovableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceBackendSetNameInput`<sup>Optional</sup> <a name="sourceBackendSetNameInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.sourceBackendSetNameInput"></a>

```typescript
public readonly sourceBackendSetNameInput: string;
```

- *Type:* string

---

##### `destinationBackendSetName`<sup>Required</sup> <a name="destinationBackendSetName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.destinationBackendSetName"></a>

```typescript
public readonly destinationBackendSetName: string;
```

- *Type:* string

---

##### `isBackendSetForNonMovable`<sup>Required</sup> <a name="isBackendSetForNonMovable" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovable"></a>

```typescript
public readonly isBackendSetForNonMovable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceBackendSetName`<sup>Required</sup> <a name="sourceBackendSetName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.sourceBackendSetName"></a>

```typescript
public readonly sourceBackendSetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembersBackendSetMappings;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a>

---


### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resetVolumeAttachmentReferenceInstanceId">resetVolumeAttachmentReferenceInstanceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVolumeAttachmentReferenceInstanceId` <a name="resetVolumeAttachmentReferenceInstanceId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resetVolumeAttachmentReferenceInstanceId"></a>

```typescript
public resetVolumeAttachmentReferenceInstanceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceIdInput">volumeAttachmentReferenceInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceId">volumeAttachmentReferenceInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `volumeAttachmentReferenceInstanceIdInput`<sup>Optional</sup> <a name="volumeAttachmentReferenceInstanceIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceIdInput"></a>

```typescript
public readonly volumeAttachmentReferenceInstanceIdInput: string;
```

- *Type:* string

---

##### `volumeAttachmentReferenceInstanceId`<sup>Required</sup> <a name="volumeAttachmentReferenceInstanceId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceId"></a>

```typescript
public readonly volumeAttachmentReferenceInstanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a>

---


### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.get"></a>

```typescript
public get(index: number): DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a>[]

---


### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resetMountPoint">resetMountPoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPoint` <a name="resetMountPoint" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resetMountPoint"></a>

```typescript
public resetMountPoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a>

---


### DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.putAttachmentDetails">putAttachmentDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.putMountDetails">putMountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resetAttachmentDetails">resetAttachmentDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resetBlockVolumeId">resetBlockVolumeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resetMountDetails">resetMountDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttachmentDetails` <a name="putAttachmentDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.putAttachmentDetails"></a>

```typescript
public putAttachmentDetails(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.putAttachmentDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a>

---

##### `putMountDetails` <a name="putMountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.putMountDetails"></a>

```typescript
public putMountDetails(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.putMountDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a>

---

##### `resetAttachmentDetails` <a name="resetAttachmentDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resetAttachmentDetails"></a>

```typescript
public resetAttachmentDetails(): void
```

##### `resetBlockVolumeId` <a name="resetBlockVolumeId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resetBlockVolumeId"></a>

```typescript
public resetBlockVolumeId(): void
```

##### `resetMountDetails` <a name="resetMountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resetMountDetails"></a>

```typescript
public resetMountDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.attachmentDetails">attachmentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.mountDetails">mountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.attachmentDetailsInput">attachmentDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.blockVolumeIdInput">blockVolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.mountDetailsInput">mountDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.blockVolumeId">blockVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachmentDetails`<sup>Required</sup> <a name="attachmentDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.attachmentDetails"></a>

```typescript
public readonly attachmentDetails: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference</a>

---

##### `mountDetails`<sup>Required</sup> <a name="mountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.mountDetails"></a>

```typescript
public readonly mountDetails: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference</a>

---

##### `attachmentDetailsInput`<sup>Optional</sup> <a name="attachmentDetailsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.attachmentDetailsInput"></a>

```typescript
public readonly attachmentDetailsInput: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a>

---

##### `blockVolumeIdInput`<sup>Optional</sup> <a name="blockVolumeIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.blockVolumeIdInput"></a>

```typescript
public readonly blockVolumeIdInput: string;
```

- *Type:* string

---

##### `mountDetailsInput`<sup>Optional</sup> <a name="mountDetailsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.mountDetailsInput"></a>

```typescript
public readonly mountDetailsInput: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a>

---

##### `blockVolumeId`<sup>Required</sup> <a name="blockVolumeId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.blockVolumeId"></a>

```typescript
public readonly blockVolumeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a>

---


### DisasterRecoveryDrProtectionGroupMembersExportMappingsList <a name="DisasterRecoveryDrProtectionGroupMembersExportMappingsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.get"></a>

```typescript
public get(index: number): DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings">DisasterRecoveryDrProtectionGroupMembersExportMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembersExportMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings">DisasterRecoveryDrProtectionGroupMembersExportMappings</a>[]

---


### DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resetDestinationMountTargetId">resetDestinationMountTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resetExportId">resetExportId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationMountTargetId` <a name="resetDestinationMountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resetDestinationMountTargetId"></a>

```typescript
public resetDestinationMountTargetId(): void
```

##### `resetExportId` <a name="resetExportId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resetExportId"></a>

```typescript
public resetExportId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.destinationMountTargetIdInput">destinationMountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.exportIdInput">exportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.destinationMountTargetId">destinationMountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.exportId">exportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings">DisasterRecoveryDrProtectionGroupMembersExportMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationMountTargetIdInput`<sup>Optional</sup> <a name="destinationMountTargetIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.destinationMountTargetIdInput"></a>

```typescript
public readonly destinationMountTargetIdInput: string;
```

- *Type:* string

---

##### `exportIdInput`<sup>Optional</sup> <a name="exportIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.exportIdInput"></a>

```typescript
public readonly exportIdInput: string;
```

- *Type:* string

---

##### `destinationMountTargetId`<sup>Required</sup> <a name="destinationMountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.destinationMountTargetId"></a>

```typescript
public readonly destinationMountTargetId: string;
```

- *Type:* string

---

##### `exportId`<sup>Required</sup> <a name="exportId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.exportId"></a>

```typescript
public readonly exportId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembersExportMappings;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings">DisasterRecoveryDrProtectionGroupMembersExportMappings</a>

---


### DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.get"></a>

```typescript
public get(index: number): DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembersFileSystemOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a>[]

---


### DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resetMountTargetId">resetMountTargetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountTargetId` <a name="resetMountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resetMountTargetId"></a>

```typescript
public resetMountTargetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetIdInput">mountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountTargetIdInput`<sup>Optional</sup> <a name="mountTargetIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetIdInput"></a>

```typescript
public readonly mountTargetIdInput: string;
```

- *Type:* string

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a>

---


### DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.putMountDetails">putMountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.putUnmountDetails">putUnmountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetExportPath">resetExportPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetMountDetails">resetMountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetMountPoint">resetMountPoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetMountTargetId">resetMountTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetUnmountDetails">resetUnmountDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMountDetails` <a name="putMountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.putMountDetails"></a>

```typescript
public putMountDetails(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.putMountDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a>

---

##### `putUnmountDetails` <a name="putUnmountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.putUnmountDetails"></a>

```typescript
public putUnmountDetails(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.putUnmountDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a>

---

##### `resetExportPath` <a name="resetExportPath" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetExportPath"></a>

```typescript
public resetExportPath(): void
```

##### `resetMountDetails` <a name="resetMountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetMountDetails"></a>

```typescript
public resetMountDetails(): void
```

##### `resetMountPoint` <a name="resetMountPoint" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetMountPoint"></a>

```typescript
public resetMountPoint(): void
```

##### `resetMountTargetId` <a name="resetMountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetMountTargetId"></a>

```typescript
public resetMountTargetId(): void
```

##### `resetUnmountDetails` <a name="resetUnmountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resetUnmountDetails"></a>

```typescript
public resetUnmountDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountDetails">mountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.unmountDetails">unmountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.exportPathInput">exportPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountDetailsInput">mountDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountTargetIdInput">mountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.unmountDetailsInput">unmountDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.exportPath">exportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountDetails`<sup>Required</sup> <a name="mountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountDetails"></a>

```typescript
public readonly mountDetails: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference</a>

---

##### `unmountDetails`<sup>Required</sup> <a name="unmountDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.unmountDetails"></a>

```typescript
public readonly unmountDetails: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference</a>

---

##### `exportPathInput`<sup>Optional</sup> <a name="exportPathInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.exportPathInput"></a>

```typescript
public readonly exportPathInput: string;
```

- *Type:* string

---

##### `mountDetailsInput`<sup>Optional</sup> <a name="mountDetailsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountDetailsInput"></a>

```typescript
public readonly mountDetailsInput: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a>

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `mountTargetIdInput`<sup>Optional</sup> <a name="mountTargetIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountTargetIdInput"></a>

```typescript
public readonly mountTargetIdInput: string;
```

- *Type:* string

---

##### `unmountDetailsInput`<sup>Optional</sup> <a name="unmountDetailsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.unmountDetailsInput"></a>

```typescript
public readonly unmountDetailsInput: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a>

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.exportPath"></a>

```typescript
public readonly exportPath: string;
```

- *Type:* string

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembersFileSystemOperations;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a>

---


### DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resetMountTargetId">resetMountTargetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountTargetId` <a name="resetMountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resetMountTargetId"></a>

```typescript
public resetMountTargetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetIdInput">mountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountTargetIdInput`<sup>Optional</sup> <a name="mountTargetIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetIdInput"></a>

```typescript
public readonly mountTargetIdInput: string;
```

- *Type:* string

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a>

---


### DisasterRecoveryDrProtectionGroupMembersList <a name="DisasterRecoveryDrProtectionGroupMembersList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.get"></a>

```typescript
public get(index: number): DisasterRecoveryDrProtectionGroupMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers">DisasterRecoveryDrProtectionGroupMembers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers">DisasterRecoveryDrProtectionGroupMembers</a>[]

---


### DisasterRecoveryDrProtectionGroupMembersOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putBackendSetMappings">putBackendSetMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putBlockVolumeOperations">putBlockVolumeOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putExportMappings">putExportMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putFileSystemOperations">putFileSystemOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putVnicMapping">putVnicMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putVnicMappings">putVnicMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetAutonomousDatabaseStandbyTypeForDrDrills">resetAutonomousDatabaseStandbyTypeForDrDrills</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetBackendSetMappings">resetBackendSetMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetBlockVolumeOperations">resetBlockVolumeOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetConnectionStringType">resetConnectionStringType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationAvailabilityDomain">resetDestinationAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationCapacityReservationId">resetDestinationCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationCompartmentId">resetDestinationCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationDedicatedVmHostId">resetDestinationDedicatedVmHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationLoadBalancerId">resetDestinationLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationNetworkLoadBalancerId">resetDestinationNetworkLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetExportMappings">resetExportMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetFileSystemOperations">resetFileSystemOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetIsMovable">resetIsMovable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetIsRetainFaultDomain">resetIsRetainFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetIsStartStopEnabled">resetIsStartStopEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetPasswordVaultSecretId">resetPasswordVaultSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetVnicMapping">resetVnicMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetVnicMappings">resetVnicMappings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackendSetMappings` <a name="putBackendSetMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putBackendSetMappings"></a>

```typescript
public putBackendSetMappings(value: IResolvable | DisasterRecoveryDrProtectionGroupMembersBackendSetMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putBackendSetMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a>[]

---

##### `putBlockVolumeOperations` <a name="putBlockVolumeOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putBlockVolumeOperations"></a>

```typescript
public putBlockVolumeOperations(value: IResolvable | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putBlockVolumeOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a>[]

---

##### `putExportMappings` <a name="putExportMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putExportMappings"></a>

```typescript
public putExportMappings(value: IResolvable | DisasterRecoveryDrProtectionGroupMembersExportMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putExportMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings">DisasterRecoveryDrProtectionGroupMembersExportMappings</a>[]

---

##### `putFileSystemOperations` <a name="putFileSystemOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putFileSystemOperations"></a>

```typescript
public putFileSystemOperations(value: IResolvable | DisasterRecoveryDrProtectionGroupMembersFileSystemOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putFileSystemOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a>[]

---

##### `putVnicMapping` <a name="putVnicMapping" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putVnicMapping"></a>

```typescript
public putVnicMapping(value: IResolvable | DisasterRecoveryDrProtectionGroupMembersVnicMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putVnicMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping">DisasterRecoveryDrProtectionGroupMembersVnicMapping</a>[]

---

##### `putVnicMappings` <a name="putVnicMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putVnicMappings"></a>

```typescript
public putVnicMappings(value: IResolvable | DisasterRecoveryDrProtectionGroupMembersVnicMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.putVnicMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings">DisasterRecoveryDrProtectionGroupMembersVnicMappings</a>[]

---

##### `resetAutonomousDatabaseStandbyTypeForDrDrills` <a name="resetAutonomousDatabaseStandbyTypeForDrDrills" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetAutonomousDatabaseStandbyTypeForDrDrills"></a>

```typescript
public resetAutonomousDatabaseStandbyTypeForDrDrills(): void
```

##### `resetBackendSetMappings` <a name="resetBackendSetMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetBackendSetMappings"></a>

```typescript
public resetBackendSetMappings(): void
```

##### `resetBlockVolumeOperations` <a name="resetBlockVolumeOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetBlockVolumeOperations"></a>

```typescript
public resetBlockVolumeOperations(): void
```

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetConnectionStringType` <a name="resetConnectionStringType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetConnectionStringType"></a>

```typescript
public resetConnectionStringType(): void
```

##### `resetDestinationAvailabilityDomain` <a name="resetDestinationAvailabilityDomain" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationAvailabilityDomain"></a>

```typescript
public resetDestinationAvailabilityDomain(): void
```

##### `resetDestinationCapacityReservationId` <a name="resetDestinationCapacityReservationId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationCapacityReservationId"></a>

```typescript
public resetDestinationCapacityReservationId(): void
```

##### `resetDestinationCompartmentId` <a name="resetDestinationCompartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationCompartmentId"></a>

```typescript
public resetDestinationCompartmentId(): void
```

##### `resetDestinationDedicatedVmHostId` <a name="resetDestinationDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationDedicatedVmHostId"></a>

```typescript
public resetDestinationDedicatedVmHostId(): void
```

##### `resetDestinationLoadBalancerId` <a name="resetDestinationLoadBalancerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationLoadBalancerId"></a>

```typescript
public resetDestinationLoadBalancerId(): void
```

##### `resetDestinationNetworkLoadBalancerId` <a name="resetDestinationNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetDestinationNetworkLoadBalancerId"></a>

```typescript
public resetDestinationNetworkLoadBalancerId(): void
```

##### `resetExportMappings` <a name="resetExportMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetExportMappings"></a>

```typescript
public resetExportMappings(): void
```

##### `resetFileSystemOperations` <a name="resetFileSystemOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetFileSystemOperations"></a>

```typescript
public resetFileSystemOperations(): void
```

##### `resetIsMovable` <a name="resetIsMovable" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetIsMovable"></a>

```typescript
public resetIsMovable(): void
```

##### `resetIsRetainFaultDomain` <a name="resetIsRetainFaultDomain" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetIsRetainFaultDomain"></a>

```typescript
public resetIsRetainFaultDomain(): void
```

##### `resetIsStartStopEnabled` <a name="resetIsStartStopEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetIsStartStopEnabled"></a>

```typescript
public resetIsStartStopEnabled(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPasswordVaultSecretId` <a name="resetPasswordVaultSecretId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetPasswordVaultSecretId"></a>

```typescript
public resetPasswordVaultSecretId(): void
```

##### `resetVnicMapping` <a name="resetVnicMapping" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetVnicMapping"></a>

```typescript
public resetVnicMapping(): void
```

##### `resetVnicMappings` <a name="resetVnicMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.resetVnicMappings"></a>

```typescript
public resetVnicMappings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.backendSetMappings">backendSetMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList">DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.blockVolumeOperations">blockVolumeOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.exportMappings">exportMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList">DisasterRecoveryDrProtectionGroupMembersExportMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.fileSystemOperations">fileSystemOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMapping">vnicMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList">DisasterRecoveryDrProtectionGroupMembersVnicMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappings">vnicMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList">DisasterRecoveryDrProtectionGroupMembersVnicMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrillsInput">autonomousDatabaseStandbyTypeForDrDrillsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.backendSetMappingsInput">backendSetMappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.blockVolumeOperationsInput">blockVolumeOperationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.connectionStringTypeInput">connectionStringTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationAvailabilityDomainInput">destinationAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCapacityReservationIdInput">destinationCapacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCompartmentIdInput">destinationCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationDedicatedVmHostIdInput">destinationDedicatedVmHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationLoadBalancerIdInput">destinationLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationNetworkLoadBalancerIdInput">destinationNetworkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.exportMappingsInput">exportMappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings">DisasterRecoveryDrProtectionGroupMembersExportMappings</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.fileSystemOperationsInput">fileSystemOperationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isMovableInput">isMovableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isRetainFaultDomainInput">isRetainFaultDomainInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isStartStopEnabledInput">isStartStopEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberIdInput">memberIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberTypeInput">memberTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.passwordVaultSecretIdInput">passwordVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappingInput">vnicMappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping">DisasterRecoveryDrProtectionGroupMembersVnicMapping</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappingsInput">vnicMappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings">DisasterRecoveryDrProtectionGroupMembersVnicMappings</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrills">autonomousDatabaseStandbyTypeForDrDrills</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.connectionStringType">connectionStringType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationAvailabilityDomain">destinationAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCapacityReservationId">destinationCapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCompartmentId">destinationCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationDedicatedVmHostId">destinationDedicatedVmHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationLoadBalancerId">destinationLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationNetworkLoadBalancerId">destinationNetworkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isMovable">isMovable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isRetainFaultDomain">isRetainFaultDomain</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isStartStopEnabled">isStartStopEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberId">memberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberType">memberType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.passwordVaultSecretId">passwordVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers">DisasterRecoveryDrProtectionGroupMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendSetMappings`<sup>Required</sup> <a name="backendSetMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.backendSetMappings"></a>

```typescript
public readonly backendSetMappings: DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList">DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList</a>

---

##### `blockVolumeOperations`<sup>Required</sup> <a name="blockVolumeOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.blockVolumeOperations"></a>

```typescript
public readonly blockVolumeOperations: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList</a>

---

##### `exportMappings`<sup>Required</sup> <a name="exportMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.exportMappings"></a>

```typescript
public readonly exportMappings: DisasterRecoveryDrProtectionGroupMembersExportMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappingsList">DisasterRecoveryDrProtectionGroupMembersExportMappingsList</a>

---

##### `fileSystemOperations`<sup>Required</sup> <a name="fileSystemOperations" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.fileSystemOperations"></a>

```typescript
public readonly fileSystemOperations: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList">DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList</a>

---

##### `vnicMapping`<sup>Required</sup> <a name="vnicMapping" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMapping"></a>

```typescript
public readonly vnicMapping: DisasterRecoveryDrProtectionGroupMembersVnicMappingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList">DisasterRecoveryDrProtectionGroupMembersVnicMappingList</a>

---

##### `vnicMappings`<sup>Required</sup> <a name="vnicMappings" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappings"></a>

```typescript
public readonly vnicMappings: DisasterRecoveryDrProtectionGroupMembersVnicMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList">DisasterRecoveryDrProtectionGroupMembersVnicMappingsList</a>

---

##### `autonomousDatabaseStandbyTypeForDrDrillsInput`<sup>Optional</sup> <a name="autonomousDatabaseStandbyTypeForDrDrillsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrillsInput"></a>

```typescript
public readonly autonomousDatabaseStandbyTypeForDrDrillsInput: string;
```

- *Type:* string

---

##### `backendSetMappingsInput`<sup>Optional</sup> <a name="backendSetMappingsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.backendSetMappingsInput"></a>

```typescript
public readonly backendSetMappingsInput: IResolvable | DisasterRecoveryDrProtectionGroupMembersBackendSetMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a>[]

---

##### `blockVolumeOperationsInput`<sup>Optional</sup> <a name="blockVolumeOperationsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.blockVolumeOperationsInput"></a>

```typescript
public readonly blockVolumeOperationsInput: IResolvable | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a>[]

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `connectionStringTypeInput`<sup>Optional</sup> <a name="connectionStringTypeInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.connectionStringTypeInput"></a>

```typescript
public readonly connectionStringTypeInput: string;
```

- *Type:* string

---

##### `destinationAvailabilityDomainInput`<sup>Optional</sup> <a name="destinationAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationAvailabilityDomainInput"></a>

```typescript
public readonly destinationAvailabilityDomainInput: string;
```

- *Type:* string

---

##### `destinationCapacityReservationIdInput`<sup>Optional</sup> <a name="destinationCapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCapacityReservationIdInput"></a>

```typescript
public readonly destinationCapacityReservationIdInput: string;
```

- *Type:* string

---

##### `destinationCompartmentIdInput`<sup>Optional</sup> <a name="destinationCompartmentIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCompartmentIdInput"></a>

```typescript
public readonly destinationCompartmentIdInput: string;
```

- *Type:* string

---

##### `destinationDedicatedVmHostIdInput`<sup>Optional</sup> <a name="destinationDedicatedVmHostIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationDedicatedVmHostIdInput"></a>

```typescript
public readonly destinationDedicatedVmHostIdInput: string;
```

- *Type:* string

---

##### `destinationLoadBalancerIdInput`<sup>Optional</sup> <a name="destinationLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationLoadBalancerIdInput"></a>

```typescript
public readonly destinationLoadBalancerIdInput: string;
```

- *Type:* string

---

##### `destinationNetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="destinationNetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationNetworkLoadBalancerIdInput"></a>

```typescript
public readonly destinationNetworkLoadBalancerIdInput: string;
```

- *Type:* string

---

##### `exportMappingsInput`<sup>Optional</sup> <a name="exportMappingsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.exportMappingsInput"></a>

```typescript
public readonly exportMappingsInput: IResolvable | DisasterRecoveryDrProtectionGroupMembersExportMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersExportMappings">DisasterRecoveryDrProtectionGroupMembersExportMappings</a>[]

---

##### `fileSystemOperationsInput`<sup>Optional</sup> <a name="fileSystemOperationsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.fileSystemOperationsInput"></a>

```typescript
public readonly fileSystemOperationsInput: IResolvable | DisasterRecoveryDrProtectionGroupMembersFileSystemOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a>[]

---

##### `isMovableInput`<sup>Optional</sup> <a name="isMovableInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isMovableInput"></a>

```typescript
public readonly isMovableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRetainFaultDomainInput`<sup>Optional</sup> <a name="isRetainFaultDomainInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isRetainFaultDomainInput"></a>

```typescript
public readonly isRetainFaultDomainInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isStartStopEnabledInput`<sup>Optional</sup> <a name="isStartStopEnabledInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isStartStopEnabledInput"></a>

```typescript
public readonly isStartStopEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memberIdInput`<sup>Optional</sup> <a name="memberIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberIdInput"></a>

```typescript
public readonly memberIdInput: string;
```

- *Type:* string

---

##### `memberTypeInput`<sup>Optional</sup> <a name="memberTypeInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberTypeInput"></a>

```typescript
public readonly memberTypeInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `passwordVaultSecretIdInput`<sup>Optional</sup> <a name="passwordVaultSecretIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.passwordVaultSecretIdInput"></a>

```typescript
public readonly passwordVaultSecretIdInput: string;
```

- *Type:* string

---

##### `vnicMappingInput`<sup>Optional</sup> <a name="vnicMappingInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappingInput"></a>

```typescript
public readonly vnicMappingInput: IResolvable | DisasterRecoveryDrProtectionGroupMembersVnicMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping">DisasterRecoveryDrProtectionGroupMembersVnicMapping</a>[]

---

##### `vnicMappingsInput`<sup>Optional</sup> <a name="vnicMappingsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappingsInput"></a>

```typescript
public readonly vnicMappingsInput: IResolvable | DisasterRecoveryDrProtectionGroupMembersVnicMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings">DisasterRecoveryDrProtectionGroupMembersVnicMappings</a>[]

---

##### `autonomousDatabaseStandbyTypeForDrDrills`<sup>Required</sup> <a name="autonomousDatabaseStandbyTypeForDrDrills" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrills"></a>

```typescript
public readonly autonomousDatabaseStandbyTypeForDrDrills: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `connectionStringType`<sup>Required</sup> <a name="connectionStringType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.connectionStringType"></a>

```typescript
public readonly connectionStringType: string;
```

- *Type:* string

---

##### `destinationAvailabilityDomain`<sup>Required</sup> <a name="destinationAvailabilityDomain" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationAvailabilityDomain"></a>

```typescript
public readonly destinationAvailabilityDomain: string;
```

- *Type:* string

---

##### `destinationCapacityReservationId`<sup>Required</sup> <a name="destinationCapacityReservationId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCapacityReservationId"></a>

```typescript
public readonly destinationCapacityReservationId: string;
```

- *Type:* string

---

##### `destinationCompartmentId`<sup>Required</sup> <a name="destinationCompartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCompartmentId"></a>

```typescript
public readonly destinationCompartmentId: string;
```

- *Type:* string

---

##### `destinationDedicatedVmHostId`<sup>Required</sup> <a name="destinationDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationDedicatedVmHostId"></a>

```typescript
public readonly destinationDedicatedVmHostId: string;
```

- *Type:* string

---

##### `destinationLoadBalancerId`<sup>Required</sup> <a name="destinationLoadBalancerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationLoadBalancerId"></a>

```typescript
public readonly destinationLoadBalancerId: string;
```

- *Type:* string

---

##### `destinationNetworkLoadBalancerId`<sup>Required</sup> <a name="destinationNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationNetworkLoadBalancerId"></a>

```typescript
public readonly destinationNetworkLoadBalancerId: string;
```

- *Type:* string

---

##### `isMovable`<sup>Required</sup> <a name="isMovable" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isMovable"></a>

```typescript
public readonly isMovable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRetainFaultDomain`<sup>Required</sup> <a name="isRetainFaultDomain" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isRetainFaultDomain"></a>

```typescript
public readonly isRetainFaultDomain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isStartStopEnabled`<sup>Required</sup> <a name="isStartStopEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.isStartStopEnabled"></a>

```typescript
public readonly isStartStopEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberId"></a>

```typescript
public readonly memberId: string;
```

- *Type:* string

---

##### `memberType`<sup>Required</sup> <a name="memberType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberType"></a>

```typescript
public readonly memberType: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `passwordVaultSecretId`<sup>Required</sup> <a name="passwordVaultSecretId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.passwordVaultSecretId"></a>

```typescript
public readonly passwordVaultSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembers;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembers">DisasterRecoveryDrProtectionGroupMembers</a>

---


### DisasterRecoveryDrProtectionGroupMembersVnicMappingList <a name="DisasterRecoveryDrProtectionGroupMembersVnicMappingList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.get"></a>

```typescript
public get(index: number): DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping">DisasterRecoveryDrProtectionGroupMembersVnicMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembersVnicMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping">DisasterRecoveryDrProtectionGroupMembersVnicMapping</a>[]

---


### DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resetDestinationNsgIdList">resetDestinationNsgIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resetDestinationSubnetId">resetDestinationSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resetSourceVnicId">resetSourceVnicId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationNsgIdList` <a name="resetDestinationNsgIdList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resetDestinationNsgIdList"></a>

```typescript
public resetDestinationNsgIdList(): void
```

##### `resetDestinationSubnetId` <a name="resetDestinationSubnetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resetDestinationSubnetId"></a>

```typescript
public resetDestinationSubnetId(): void
```

##### `resetSourceVnicId` <a name="resetSourceVnicId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resetSourceVnicId"></a>

```typescript
public resetSourceVnicId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationNsgIdListInput">destinationNsgIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationSubnetIdInput">destinationSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.sourceVnicIdInput">sourceVnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationNsgIdList">destinationNsgIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationSubnetId">destinationSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.sourceVnicId">sourceVnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping">DisasterRecoveryDrProtectionGroupMembersVnicMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationNsgIdListInput`<sup>Optional</sup> <a name="destinationNsgIdListInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationNsgIdListInput"></a>

```typescript
public readonly destinationNsgIdListInput: string[];
```

- *Type:* string[]

---

##### `destinationSubnetIdInput`<sup>Optional</sup> <a name="destinationSubnetIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationSubnetIdInput"></a>

```typescript
public readonly destinationSubnetIdInput: string;
```

- *Type:* string

---

##### `sourceVnicIdInput`<sup>Optional</sup> <a name="sourceVnicIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.sourceVnicIdInput"></a>

```typescript
public readonly sourceVnicIdInput: string;
```

- *Type:* string

---

##### `destinationNsgIdList`<sup>Required</sup> <a name="destinationNsgIdList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationNsgIdList"></a>

```typescript
public readonly destinationNsgIdList: string[];
```

- *Type:* string[]

---

##### `destinationSubnetId`<sup>Required</sup> <a name="destinationSubnetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationSubnetId"></a>

```typescript
public readonly destinationSubnetId: string;
```

- *Type:* string

---

##### `sourceVnicId`<sup>Required</sup> <a name="sourceVnicId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.sourceVnicId"></a>

```typescript
public readonly sourceVnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembersVnicMapping;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMapping">DisasterRecoveryDrProtectionGroupMembersVnicMapping</a>

---


### DisasterRecoveryDrProtectionGroupMembersVnicMappingsList <a name="DisasterRecoveryDrProtectionGroupMembersVnicMappingsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.get"></a>

```typescript
public get(index: number): DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings">DisasterRecoveryDrProtectionGroupMembersVnicMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembersVnicMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings">DisasterRecoveryDrProtectionGroupMembersVnicMappings</a>[]

---


### DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference <a name="DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationNsgIdList">resetDestinationNsgIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationPrimaryPrivateIpAddress">resetDestinationPrimaryPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationPrimaryPrivateIpHostnameLabel">resetDestinationPrimaryPrivateIpHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationSubnetId">resetDestinationSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetSourceVnicId">resetSourceVnicId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationNsgIdList` <a name="resetDestinationNsgIdList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationNsgIdList"></a>

```typescript
public resetDestinationNsgIdList(): void
```

##### `resetDestinationPrimaryPrivateIpAddress` <a name="resetDestinationPrimaryPrivateIpAddress" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationPrimaryPrivateIpAddress"></a>

```typescript
public resetDestinationPrimaryPrivateIpAddress(): void
```

##### `resetDestinationPrimaryPrivateIpHostnameLabel` <a name="resetDestinationPrimaryPrivateIpHostnameLabel" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationPrimaryPrivateIpHostnameLabel"></a>

```typescript
public resetDestinationPrimaryPrivateIpHostnameLabel(): void
```

##### `resetDestinationSubnetId` <a name="resetDestinationSubnetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetDestinationSubnetId"></a>

```typescript
public resetDestinationSubnetId(): void
```

##### `resetSourceVnicId` <a name="resetSourceVnicId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resetSourceVnicId"></a>

```typescript
public resetSourceVnicId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationNsgIdListInput">destinationNsgIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddressInput">destinationPrimaryPrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabelInput">destinationPrimaryPrivateIpHostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationSubnetIdInput">destinationSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.sourceVnicIdInput">sourceVnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationNsgIdList">destinationNsgIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddress">destinationPrimaryPrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabel">destinationPrimaryPrivateIpHostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationSubnetId">destinationSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.sourceVnicId">sourceVnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings">DisasterRecoveryDrProtectionGroupMembersVnicMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationNsgIdListInput`<sup>Optional</sup> <a name="destinationNsgIdListInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationNsgIdListInput"></a>

```typescript
public readonly destinationNsgIdListInput: string[];
```

- *Type:* string[]

---

##### `destinationPrimaryPrivateIpAddressInput`<sup>Optional</sup> <a name="destinationPrimaryPrivateIpAddressInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddressInput"></a>

```typescript
public readonly destinationPrimaryPrivateIpAddressInput: string;
```

- *Type:* string

---

##### `destinationPrimaryPrivateIpHostnameLabelInput`<sup>Optional</sup> <a name="destinationPrimaryPrivateIpHostnameLabelInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabelInput"></a>

```typescript
public readonly destinationPrimaryPrivateIpHostnameLabelInput: string;
```

- *Type:* string

---

##### `destinationSubnetIdInput`<sup>Optional</sup> <a name="destinationSubnetIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationSubnetIdInput"></a>

```typescript
public readonly destinationSubnetIdInput: string;
```

- *Type:* string

---

##### `sourceVnicIdInput`<sup>Optional</sup> <a name="sourceVnicIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.sourceVnicIdInput"></a>

```typescript
public readonly sourceVnicIdInput: string;
```

- *Type:* string

---

##### `destinationNsgIdList`<sup>Required</sup> <a name="destinationNsgIdList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationNsgIdList"></a>

```typescript
public readonly destinationNsgIdList: string[];
```

- *Type:* string[]

---

##### `destinationPrimaryPrivateIpAddress`<sup>Required</sup> <a name="destinationPrimaryPrivateIpAddress" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddress"></a>

```typescript
public readonly destinationPrimaryPrivateIpAddress: string;
```

- *Type:* string

---

##### `destinationPrimaryPrivateIpHostnameLabel`<sup>Required</sup> <a name="destinationPrimaryPrivateIpHostnameLabel" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabel"></a>

```typescript
public readonly destinationPrimaryPrivateIpHostnameLabel: string;
```

- *Type:* string

---

##### `destinationSubnetId`<sup>Required</sup> <a name="destinationSubnetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationSubnetId"></a>

```typescript
public readonly destinationSubnetId: string;
```

- *Type:* string

---

##### `sourceVnicId`<sup>Required</sup> <a name="sourceVnicId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.sourceVnicId"></a>

```typescript
public readonly sourceVnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupMembersVnicMappings;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupMembersVnicMappings">DisasterRecoveryDrProtectionGroupMembersVnicMappings</a>

---


### DisasterRecoveryDrProtectionGroupTimeoutsOutputReference <a name="DisasterRecoveryDrProtectionGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrProtectionGroup } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts">DisasterRecoveryDrProtectionGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrProtectionGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrProtectionGroup.DisasterRecoveryDrProtectionGroupTimeouts">DisasterRecoveryDrProtectionGroupTimeouts</a>

---



