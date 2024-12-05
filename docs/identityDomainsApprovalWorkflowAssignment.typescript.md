# `identityDomainsApprovalWorkflowAssignment` Submodule <a name="`identityDomainsApprovalWorkflowAssignment` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsApprovalWorkflowAssignment <a name="IdentityDomainsApprovalWorkflowAssignment" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment oci_identity_domains_approval_workflow_assignment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment(scope: Construct, id: string, config: IdentityDomainsApprovalWorkflowAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig">IdentityDomainsApprovalWorkflowAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig">IdentityDomainsApprovalWorkflowAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.putApprovalWorkflow">putApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.putAssignedTo">putAssignedTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalWorkflow` <a name="putApprovalWorkflow" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.putApprovalWorkflow"></a>

```typescript
public putApprovalWorkflow(value: IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.putApprovalWorkflow.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow">IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow</a>

---

##### `putAssignedTo` <a name="putAssignedTo" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.putAssignedTo"></a>

```typescript
public putAssignedTo(value: IdentityDomainsApprovalWorkflowAssignmentAssignedTo): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.putAssignedTo.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo">IdentityDomainsApprovalWorkflowAssignmentAssignedTo</a>

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.putTags"></a>

```typescript
public putTags(value: IResolvable | IdentityDomainsApprovalWorkflowAssignmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags">IdentityDomainsApprovalWorkflowAssignmentTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityDomainsApprovalWorkflowAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts">IdentityDomainsApprovalWorkflowAssignmentTimeouts</a>

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsApprovalWorkflowAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.isConstruct"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.isTerraformElement"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.isTerraformResource"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.generateConfigForImport"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityDomainsApprovalWorkflowAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsApprovalWorkflowAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsApprovalWorkflowAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsApprovalWorkflowAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflow">approvalWorkflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference">IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.assignedTo">assignedTo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference">IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList">IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList">IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList">IdentityDomainsApprovalWorkflowAssignmentMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList">IdentityDomainsApprovalWorkflowAssignmentTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference">IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflowInput">approvalWorkflowInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow">IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.assignedToInput">assignedToInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo">IdentityDomainsApprovalWorkflowAssignmentAssignedTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.assignmentTypeInput">assignmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.schemasInput">schemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags">IdentityDomainsApprovalWorkflowAssignmentTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts">IdentityDomainsApprovalWorkflowAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.assignmentType">assignmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalWorkflow`<sup>Required</sup> <a name="approvalWorkflow" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflow"></a>

```typescript
public readonly approvalWorkflow: IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference">IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference</a>

---

##### `assignedTo`<sup>Required</sup> <a name="assignedTo" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.assignedTo"></a>

```typescript
public readonly assignedTo: IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference">IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference</a>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList">IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList">IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.meta"></a>

```typescript
public readonly meta: IdentityDomainsApprovalWorkflowAssignmentMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList">IdentityDomainsApprovalWorkflowAssignmentMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.tags"></a>

```typescript
public readonly tags: IdentityDomainsApprovalWorkflowAssignmentTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList">IdentityDomainsApprovalWorkflowAssignmentTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference">IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference</a>

---

##### `approvalWorkflowInput`<sup>Optional</sup> <a name="approvalWorkflowInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflowInput"></a>

```typescript
public readonly approvalWorkflowInput: IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow">IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow</a>

---

##### `assignedToInput`<sup>Optional</sup> <a name="assignedToInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.assignedToInput"></a>

```typescript
public readonly assignedToInput: IdentityDomainsApprovalWorkflowAssignmentAssignedTo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo">IdentityDomainsApprovalWorkflowAssignmentAssignedTo</a>

---

##### `assignmentTypeInput`<sup>Optional</sup> <a name="assignmentTypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.assignmentTypeInput"></a>

```typescript
public readonly assignmentTypeInput: string;
```

- *Type:* string

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.schemasInput"></a>

```typescript
public readonly schemasInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IdentityDomainsApprovalWorkflowAssignmentTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags">IdentityDomainsApprovalWorkflowAssignmentTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityDomainsApprovalWorkflowAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts">IdentityDomainsApprovalWorkflowAssignmentTimeouts</a>

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.assignmentType"></a>

```typescript
public readonly assignmentType: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow <a name="IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowAssignmentApprovalWorkflow: identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#type IdentityDomainsApprovalWorkflowAssignment#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#value IdentityDomainsApprovalWorkflowAssignment#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#ocid IdentityDomainsApprovalWorkflowAssignment#ocid}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#type IdentityDomainsApprovalWorkflowAssignment#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#value IdentityDomainsApprovalWorkflowAssignment#value}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#ocid IdentityDomainsApprovalWorkflowAssignment#ocid}.

---

### IdentityDomainsApprovalWorkflowAssignmentAssignedTo <a name="IdentityDomainsApprovalWorkflowAssignmentAssignedTo" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowAssignmentAssignedTo: identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#type IdentityDomainsApprovalWorkflowAssignment#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#value IdentityDomainsApprovalWorkflowAssignment#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#ocid IdentityDomainsApprovalWorkflowAssignment#ocid}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#type IdentityDomainsApprovalWorkflowAssignment#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#value IdentityDomainsApprovalWorkflowAssignment#value}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#ocid IdentityDomainsApprovalWorkflowAssignment#ocid}.

---

### IdentityDomainsApprovalWorkflowAssignmentConfig <a name="IdentityDomainsApprovalWorkflowAssignmentConfig" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowAssignmentConfig: identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.approvalWorkflow">approvalWorkflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow">IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow</a></code> | approval_workflow block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.assignedTo">assignedTo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo">IdentityDomainsApprovalWorkflowAssignmentAssignedTo</a></code> | assigned_to block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.assignmentType">assignmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#assignment_type IdentityDomainsApprovalWorkflowAssignment#assignment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#idcs_endpoint IdentityDomainsApprovalWorkflowAssignment#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.schemas">schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#schemas IdentityDomainsApprovalWorkflowAssignment#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#attributes IdentityDomainsApprovalWorkflowAssignment#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#attribute_sets IdentityDomainsApprovalWorkflowAssignment#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#authorization IdentityDomainsApprovalWorkflowAssignment#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#ocid IdentityDomainsApprovalWorkflowAssignment#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#resource_type_schema_version IdentityDomainsApprovalWorkflowAssignment#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags">IdentityDomainsApprovalWorkflowAssignmentTags</a>[]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts">IdentityDomainsApprovalWorkflowAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalWorkflow`<sup>Required</sup> <a name="approvalWorkflow" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.approvalWorkflow"></a>

```typescript
public readonly approvalWorkflow: IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow">IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow</a>

approval_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#approval_workflow IdentityDomainsApprovalWorkflowAssignment#approval_workflow}

---

##### `assignedTo`<sup>Required</sup> <a name="assignedTo" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.assignedTo"></a>

```typescript
public readonly assignedTo: IdentityDomainsApprovalWorkflowAssignmentAssignedTo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo">IdentityDomainsApprovalWorkflowAssignmentAssignedTo</a>

assigned_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#assigned_to IdentityDomainsApprovalWorkflowAssignment#assigned_to}

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.assignmentType"></a>

```typescript
public readonly assignmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#assignment_type IdentityDomainsApprovalWorkflowAssignment#assignment_type}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#idcs_endpoint IdentityDomainsApprovalWorkflowAssignment#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#schemas IdentityDomainsApprovalWorkflowAssignment#schemas}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#attributes IdentityDomainsApprovalWorkflowAssignment#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#attribute_sets IdentityDomainsApprovalWorkflowAssignment#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#authorization IdentityDomainsApprovalWorkflowAssignment#authorization}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#ocid IdentityDomainsApprovalWorkflowAssignment#ocid}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#resource_type_schema_version IdentityDomainsApprovalWorkflowAssignment#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IdentityDomainsApprovalWorkflowAssignmentTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags">IdentityDomainsApprovalWorkflowAssignmentTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#tags IdentityDomainsApprovalWorkflowAssignment#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsApprovalWorkflowAssignmentTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts">IdentityDomainsApprovalWorkflowAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#timeouts IdentityDomainsApprovalWorkflowAssignment#timeouts}

---

### IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy <a name="IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowAssignmentIdcsCreatedBy: identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy = { ... }
```


### IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy <a name="IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy: identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy = { ... }
```


### IdentityDomainsApprovalWorkflowAssignmentMeta <a name="IdentityDomainsApprovalWorkflowAssignmentMeta" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMeta.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowAssignmentMeta: identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMeta = { ... }
```


### IdentityDomainsApprovalWorkflowAssignmentTags <a name="IdentityDomainsApprovalWorkflowAssignmentTags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowAssignmentTags: identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#key IdentityDomainsApprovalWorkflowAssignment#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#value IdentityDomainsApprovalWorkflowAssignment#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#key IdentityDomainsApprovalWorkflowAssignment#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#value IdentityDomainsApprovalWorkflowAssignment#value}.

---

### IdentityDomainsApprovalWorkflowAssignmentTimeouts <a name="IdentityDomainsApprovalWorkflowAssignmentTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowAssignmentTimeouts: identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#create IdentityDomainsApprovalWorkflowAssignment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#delete IdentityDomainsApprovalWorkflowAssignment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#update IdentityDomainsApprovalWorkflowAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#create IdentityDomainsApprovalWorkflowAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#delete IdentityDomainsApprovalWorkflowAssignment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow_assignment#update IdentityDomainsApprovalWorkflowAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference <a name="IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.resetOcid">resetOcid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.resetOcid"></a>

```typescript
public resetOcid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow">IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow">IdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow</a>

---


### IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference <a name="IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.resetOcid">resetOcid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.resetOcid"></a>

```typescript
public resetOcid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo">IdentityDomainsApprovalWorkflowAssignmentAssignedTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsApprovalWorkflowAssignmentAssignedTo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentAssignedTo">IdentityDomainsApprovalWorkflowAssignmentAssignedTo</a>

---


### IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList <a name="IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference <a name="IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy">IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy">IdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy</a>

---


### IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList <a name="IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference <a name="IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy">IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy">IdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy</a>

---


### IdentityDomainsApprovalWorkflowAssignmentMetaList <a name="IdentityDomainsApprovalWorkflowAssignmentMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.get"></a>

```typescript
public get(index: number): IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference <a name="IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMeta">IdentityDomainsApprovalWorkflowAssignmentMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsApprovalWorkflowAssignmentMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentMeta">IdentityDomainsApprovalWorkflowAssignmentMeta</a>

---


### IdentityDomainsApprovalWorkflowAssignmentTagsList <a name="IdentityDomainsApprovalWorkflowAssignmentTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.get"></a>

```typescript
public get(index: number): IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags">IdentityDomainsApprovalWorkflowAssignmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsApprovalWorkflowAssignmentTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags">IdentityDomainsApprovalWorkflowAssignmentTags</a>[]

---


### IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference <a name="IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags">IdentityDomainsApprovalWorkflowAssignmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsApprovalWorkflowAssignmentTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTags">IdentityDomainsApprovalWorkflowAssignmentTags</a>

---


### IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference <a name="IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflowAssignment } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts">IdentityDomainsApprovalWorkflowAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsApprovalWorkflowAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflowAssignment.IdentityDomainsApprovalWorkflowAssignmentTimeouts">IdentityDomainsApprovalWorkflowAssignmentTimeouts</a>

---



