# `operatorAccessControlOperatorControlAssignment` Submodule <a name="`operatorAccessControlOperatorControlAssignment` Submodule" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OperatorAccessControlOperatorControlAssignment <a name="OperatorAccessControlOperatorControlAssignment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment oci_operator_access_control_operator_control_assignment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer"></a>

```typescript
import { operatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

new operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment(scope: Construct, id: string, config: OperatorAccessControlOperatorControlAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig">OperatorAccessControlOperatorControlAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig">OperatorAccessControlOperatorControlAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsAutoApproveDuringMaintenance">resetIsAutoApproveDuringMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsHypervisorLogForwarded">resetIsHypervisorLogForwarded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsLogForwarded">resetIsLogForwarded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerAddress">resetRemoteSyslogServerAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerCaCert">resetRemoteSyslogServerCaCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerPort">resetRemoteSyslogServerPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentFrom">resetTimeAssignmentFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentTo">resetTimeAssignmentTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetValidateAssignmentTrigger">resetValidateAssignmentTrigger</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: OperatorAccessControlOperatorControlAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAutoApproveDuringMaintenance` <a name="resetIsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsAutoApproveDuringMaintenance"></a>

```typescript
public resetIsAutoApproveDuringMaintenance(): void
```

##### `resetIsHypervisorLogForwarded` <a name="resetIsHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsHypervisorLogForwarded"></a>

```typescript
public resetIsHypervisorLogForwarded(): void
```

##### `resetIsLogForwarded` <a name="resetIsLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsLogForwarded"></a>

```typescript
public resetIsLogForwarded(): void
```

##### `resetRemoteSyslogServerAddress` <a name="resetRemoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerAddress"></a>

```typescript
public resetRemoteSyslogServerAddress(): void
```

##### `resetRemoteSyslogServerCaCert` <a name="resetRemoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerCaCert"></a>

```typescript
public resetRemoteSyslogServerCaCert(): void
```

##### `resetRemoteSyslogServerPort` <a name="resetRemoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerPort"></a>

```typescript
public resetRemoteSyslogServerPort(): void
```

##### `resetTimeAssignmentFrom` <a name="resetTimeAssignmentFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentFrom"></a>

```typescript
public resetTimeAssignmentFrom(): void
```

##### `resetTimeAssignmentTo` <a name="resetTimeAssignmentTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentTo"></a>

```typescript
public resetTimeAssignmentTo(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidateAssignmentTrigger` <a name="resetValidateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetValidateAssignmentTrigger"></a>

```typescript
public resetValidateAssignmentTrigger(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct"></a>

```typescript
import { operatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement"></a>

```typescript
import { operatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource"></a>

```typescript
import { operatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport"></a>

```typescript
import { operatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OperatorAccessControlOperatorControlAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OperatorAccessControlOperatorControlAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OperatorAccessControlOperatorControlAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.assignerId">assignerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.detachmentDescription">detachmentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorCode">errorCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment">isDefaultAssignment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.opControlName">opControlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfAssignment">timeOfAssignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference">OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.unassignerId">unassignerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenanceInput">isAutoApproveDuringMaintenanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlwaysInput">isEnforcedAlwaysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwardedInput">isHypervisorLogForwardedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwardedInput">isLogForwardedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlIdInput">operatorControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddressInput">remoteSyslogServerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCertInput">remoteSyslogServerCaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPortInput">remoteSyslogServerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentIdInput">resourceCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFromInput">timeAssignmentFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentToInput">timeAssignmentToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTriggerInput">validateAssignmentTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance">isAutoApproveDuringMaintenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways">isEnforcedAlways</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded">isHypervisorLogForwarded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwarded">isLogForwarded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlId">operatorControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress">remoteSyslogServerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert">remoteSyslogServerCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort">remoteSyslogServerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom">timeAssignmentFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo">timeAssignmentTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger">validateAssignmentTrigger</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assignerId`<sup>Required</sup> <a name="assignerId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.assignerId"></a>

```typescript
public readonly assignerId: string;
```

- *Type:* string

---

##### `detachmentDescription`<sup>Required</sup> <a name="detachmentDescription" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.detachmentDescription"></a>

```typescript
public readonly detachmentDescription: string;
```

- *Type:* string

---

##### `errorCode`<sup>Required</sup> <a name="errorCode" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorCode"></a>

```typescript
public readonly errorCode: number;
```

- *Type:* number

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `isDefaultAssignment`<sup>Required</sup> <a name="isDefaultAssignment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment"></a>

```typescript
public readonly isDefaultAssignment: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `opControlName`<sup>Required</sup> <a name="opControlName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.opControlName"></a>

```typescript
public readonly opControlName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeOfAssignment`<sup>Required</sup> <a name="timeOfAssignment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfAssignment"></a>

```typescript
public readonly timeOfAssignment: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference">OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference</a>

---

##### `unassignerId`<sup>Required</sup> <a name="unassignerId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.unassignerId"></a>

```typescript
public readonly unassignerId: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAutoApproveDuringMaintenanceInput`<sup>Optional</sup> <a name="isAutoApproveDuringMaintenanceInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenanceInput"></a>

```typescript
public readonly isAutoApproveDuringMaintenanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnforcedAlwaysInput`<sup>Optional</sup> <a name="isEnforcedAlwaysInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlwaysInput"></a>

```typescript
public readonly isEnforcedAlwaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHypervisorLogForwardedInput`<sup>Optional</sup> <a name="isHypervisorLogForwardedInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwardedInput"></a>

```typescript
public readonly isHypervisorLogForwardedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isLogForwardedInput`<sup>Optional</sup> <a name="isLogForwardedInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwardedInput"></a>

```typescript
public readonly isLogForwardedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorControlIdInput`<sup>Optional</sup> <a name="operatorControlIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlIdInput"></a>

```typescript
public readonly operatorControlIdInput: string;
```

- *Type:* string

---

##### `remoteSyslogServerAddressInput`<sup>Optional</sup> <a name="remoteSyslogServerAddressInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddressInput"></a>

```typescript
public readonly remoteSyslogServerAddressInput: string;
```

- *Type:* string

---

##### `remoteSyslogServerCaCertInput`<sup>Optional</sup> <a name="remoteSyslogServerCaCertInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCertInput"></a>

```typescript
public readonly remoteSyslogServerCaCertInput: string;
```

- *Type:* string

---

##### `remoteSyslogServerPortInput`<sup>Optional</sup> <a name="remoteSyslogServerPortInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPortInput"></a>

```typescript
public readonly remoteSyslogServerPortInput: number;
```

- *Type:* number

---

##### `resourceCompartmentIdInput`<sup>Optional</sup> <a name="resourceCompartmentIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentIdInput"></a>

```typescript
public readonly resourceCompartmentIdInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `timeAssignmentFromInput`<sup>Optional</sup> <a name="timeAssignmentFromInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFromInput"></a>

```typescript
public readonly timeAssignmentFromInput: string;
```

- *Type:* string

---

##### `timeAssignmentToInput`<sup>Optional</sup> <a name="timeAssignmentToInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentToInput"></a>

```typescript
public readonly timeAssignmentToInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OperatorAccessControlOperatorControlAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>

---

##### `validateAssignmentTriggerInput`<sup>Optional</sup> <a name="validateAssignmentTriggerInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTriggerInput"></a>

```typescript
public readonly validateAssignmentTriggerInput: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutoApproveDuringMaintenance`<sup>Required</sup> <a name="isAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance"></a>

```typescript
public readonly isAutoApproveDuringMaintenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnforcedAlways`<sup>Required</sup> <a name="isEnforcedAlways" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways"></a>

```typescript
public readonly isEnforcedAlways: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHypervisorLogForwarded`<sup>Required</sup> <a name="isHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded"></a>

```typescript
public readonly isHypervisorLogForwarded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isLogForwarded`<sup>Required</sup> <a name="isLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwarded"></a>

```typescript
public readonly isLogForwarded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorControlId`<sup>Required</sup> <a name="operatorControlId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlId"></a>

```typescript
public readonly operatorControlId: string;
```

- *Type:* string

---

##### `remoteSyslogServerAddress`<sup>Required</sup> <a name="remoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress"></a>

```typescript
public readonly remoteSyslogServerAddress: string;
```

- *Type:* string

---

##### `remoteSyslogServerCaCert`<sup>Required</sup> <a name="remoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert"></a>

```typescript
public readonly remoteSyslogServerCaCert: string;
```

- *Type:* string

---

##### `remoteSyslogServerPort`<sup>Required</sup> <a name="remoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort"></a>

```typescript
public readonly remoteSyslogServerPort: number;
```

- *Type:* number

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `timeAssignmentFrom`<sup>Required</sup> <a name="timeAssignmentFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom"></a>

```typescript
public readonly timeAssignmentFrom: string;
```

- *Type:* string

---

##### `timeAssignmentTo`<sup>Required</sup> <a name="timeAssignmentTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo"></a>

```typescript
public readonly timeAssignmentTo: string;
```

- *Type:* string

---

##### `validateAssignmentTrigger`<sup>Required</sup> <a name="validateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger"></a>

```typescript
public readonly validateAssignmentTrigger: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OperatorAccessControlOperatorControlAssignmentConfig <a name="OperatorAccessControlOperatorControlAssignmentConfig" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.Initializer"></a>

```typescript
import { operatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

const operatorAccessControlOperatorControlAssignmentConfig: operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#compartment_id OperatorAccessControlOperatorControlAssignment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isEnforcedAlways">isEnforcedAlways</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_enforced_always OperatorAccessControlOperatorControlAssignment#is_enforced_always}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlId">operatorControlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#operator_control_id OperatorAccessControlOperatorControlAssignment#operator_control_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_compartment_id OperatorAccessControlOperatorControlAssignment#resource_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_id OperatorAccessControlOperatorControlAssignment#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceName">resourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_name OperatorAccessControlOperatorControlAssignment#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_type OperatorAccessControlOperatorControlAssignment#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#comment OperatorAccessControlOperatorControlAssignment#comment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#defined_tags OperatorAccessControlOperatorControlAssignment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#freeform_tags OperatorAccessControlOperatorControlAssignment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#id OperatorAccessControlOperatorControlAssignment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isAutoApproveDuringMaintenance">isAutoApproveDuringMaintenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_auto_approve_during_maintenance OperatorAccessControlOperatorControlAssignment#is_auto_approve_during_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isHypervisorLogForwarded">isHypervisorLogForwarded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_hypervisor_log_forwarded OperatorAccessControlOperatorControlAssignment#is_hypervisor_log_forwarded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isLogForwarded">isLogForwarded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_log_forwarded OperatorAccessControlOperatorControlAssignment#is_log_forwarded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerAddress">remoteSyslogServerAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_address OperatorAccessControlOperatorControlAssignment#remote_syslog_server_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerCaCert">remoteSyslogServerCaCert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_ca_cert OperatorAccessControlOperatorControlAssignment#remote_syslog_server_ca_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerPort">remoteSyslogServerPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_port OperatorAccessControlOperatorControlAssignment#remote_syslog_server_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentFrom">timeAssignmentFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_from OperatorAccessControlOperatorControlAssignment#time_assignment_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentTo">timeAssignmentTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_to OperatorAccessControlOperatorControlAssignment#time_assignment_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.validateAssignmentTrigger">validateAssignmentTrigger</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#validate_assignment_trigger OperatorAccessControlOperatorControlAssignment#validate_assignment_trigger}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#compartment_id OperatorAccessControlOperatorControlAssignment#compartment_id}.

---

##### `isEnforcedAlways`<sup>Required</sup> <a name="isEnforcedAlways" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isEnforcedAlways"></a>

```typescript
public readonly isEnforcedAlways: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_enforced_always OperatorAccessControlOperatorControlAssignment#is_enforced_always}.

---

##### `operatorControlId`<sup>Required</sup> <a name="operatorControlId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlId"></a>

```typescript
public readonly operatorControlId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#operator_control_id OperatorAccessControlOperatorControlAssignment#operator_control_id}.

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_compartment_id OperatorAccessControlOperatorControlAssignment#resource_compartment_id}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_id OperatorAccessControlOperatorControlAssignment#resource_id}.

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_name OperatorAccessControlOperatorControlAssignment#resource_name}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_type OperatorAccessControlOperatorControlAssignment#resource_type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#comment OperatorAccessControlOperatorControlAssignment#comment}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#defined_tags OperatorAccessControlOperatorControlAssignment#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#freeform_tags OperatorAccessControlOperatorControlAssignment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#id OperatorAccessControlOperatorControlAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAutoApproveDuringMaintenance`<sup>Optional</sup> <a name="isAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isAutoApproveDuringMaintenance"></a>

```typescript
public readonly isAutoApproveDuringMaintenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_auto_approve_during_maintenance OperatorAccessControlOperatorControlAssignment#is_auto_approve_during_maintenance}.

---

##### `isHypervisorLogForwarded`<sup>Optional</sup> <a name="isHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isHypervisorLogForwarded"></a>

```typescript
public readonly isHypervisorLogForwarded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_hypervisor_log_forwarded OperatorAccessControlOperatorControlAssignment#is_hypervisor_log_forwarded}.

---

##### `isLogForwarded`<sup>Optional</sup> <a name="isLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isLogForwarded"></a>

```typescript
public readonly isLogForwarded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_log_forwarded OperatorAccessControlOperatorControlAssignment#is_log_forwarded}.

---

##### `remoteSyslogServerAddress`<sup>Optional</sup> <a name="remoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerAddress"></a>

```typescript
public readonly remoteSyslogServerAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_address OperatorAccessControlOperatorControlAssignment#remote_syslog_server_address}.

---

##### `remoteSyslogServerCaCert`<sup>Optional</sup> <a name="remoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerCaCert"></a>

```typescript
public readonly remoteSyslogServerCaCert: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_ca_cert OperatorAccessControlOperatorControlAssignment#remote_syslog_server_ca_cert}.

---

##### `remoteSyslogServerPort`<sup>Optional</sup> <a name="remoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerPort"></a>

```typescript
public readonly remoteSyslogServerPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_port OperatorAccessControlOperatorControlAssignment#remote_syslog_server_port}.

---

##### `timeAssignmentFrom`<sup>Optional</sup> <a name="timeAssignmentFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentFrom"></a>

```typescript
public readonly timeAssignmentFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_from OperatorAccessControlOperatorControlAssignment#time_assignment_from}.

---

##### `timeAssignmentTo`<sup>Optional</sup> <a name="timeAssignmentTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentTo"></a>

```typescript
public readonly timeAssignmentTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_to OperatorAccessControlOperatorControlAssignment#time_assignment_to}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OperatorAccessControlOperatorControlAssignmentTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#timeouts OperatorAccessControlOperatorControlAssignment#timeouts}

---

##### `validateAssignmentTrigger`<sup>Optional</sup> <a name="validateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.validateAssignmentTrigger"></a>

```typescript
public readonly validateAssignmentTrigger: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#validate_assignment_trigger OperatorAccessControlOperatorControlAssignment#validate_assignment_trigger}.

---

### OperatorAccessControlOperatorControlAssignmentTimeouts <a name="OperatorAccessControlOperatorControlAssignmentTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.Initializer"></a>

```typescript
import { operatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

const operatorAccessControlOperatorControlAssignmentTimeouts: operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#create OperatorAccessControlOperatorControlAssignment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#delete OperatorAccessControlOperatorControlAssignment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#update OperatorAccessControlOperatorControlAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#create OperatorAccessControlOperatorControlAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#delete OperatorAccessControlOperatorControlAssignment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#update OperatorAccessControlOperatorControlAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference <a name="OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { operatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

new operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OperatorAccessControlOperatorControlAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>

---



