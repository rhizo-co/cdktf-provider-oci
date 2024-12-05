# `identityDomainsApprovalWorkflow` Submodule <a name="`identityDomainsApprovalWorkflow` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsApprovalWorkflow <a name="IdentityDomainsApprovalWorkflow" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow oci_identity_domains_approval_workflow}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow(scope: Construct, id: string, config: IdentityDomainsApprovalWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig">IdentityDomainsApprovalWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig">IdentityDomainsApprovalWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putApprovalWorkflowSteps">putApprovalWorkflowSteps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putMaxDuration">putMaxDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetApprovalWorkflowSteps">resetApprovalWorkflowSteps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalWorkflowSteps` <a name="putApprovalWorkflowSteps" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putApprovalWorkflowSteps"></a>

```typescript
public putApprovalWorkflowSteps(value: IResolvable | IdentityDomainsApprovalWorkflowApprovalWorkflowSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putApprovalWorkflowSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>[]

---

##### `putMaxDuration` <a name="putMaxDuration" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putMaxDuration"></a>

```typescript
public putMaxDuration(value: IdentityDomainsApprovalWorkflowMaxDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putMaxDuration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a>

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTags"></a>

```typescript
public putTags(value: IResolvable | IdentityDomainsApprovalWorkflowTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityDomainsApprovalWorkflowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a>

---

##### `resetApprovalWorkflowSteps` <a name="resetApprovalWorkflowSteps" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetApprovalWorkflowSteps"></a>

```typescript
public resetApprovalWorkflowSteps(): void
```

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsApprovalWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isConstruct"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformElement"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformResource"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityDomainsApprovalWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsApprovalWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsApprovalWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsApprovalWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.approvalWorkflowSteps">approvalWorkflowSteps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList">IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList">IdentityDomainsApprovalWorkflowIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList">IdentityDomainsApprovalWorkflowIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.maxDuration">maxDuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference">IdentityDomainsApprovalWorkflowMaxDurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList">IdentityDomainsApprovalWorkflowMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList">IdentityDomainsApprovalWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference">IdentityDomainsApprovalWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.approvalWorkflowStepsInput">approvalWorkflowStepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.maxDurationInput">maxDurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.schemasInput">schemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalWorkflowSteps`<sup>Required</sup> <a name="approvalWorkflowSteps" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.approvalWorkflowSteps"></a>

```typescript
public readonly approvalWorkflowSteps: IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList">IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList</a>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: IdentityDomainsApprovalWorkflowIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList">IdentityDomainsApprovalWorkflowIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: IdentityDomainsApprovalWorkflowIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList">IdentityDomainsApprovalWorkflowIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `maxDuration`<sup>Required</sup> <a name="maxDuration" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.maxDuration"></a>

```typescript
public readonly maxDuration: IdentityDomainsApprovalWorkflowMaxDurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference">IdentityDomainsApprovalWorkflowMaxDurationOutputReference</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.meta"></a>

```typescript
public readonly meta: IdentityDomainsApprovalWorkflowMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList">IdentityDomainsApprovalWorkflowMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tags"></a>

```typescript
public readonly tags: IdentityDomainsApprovalWorkflowTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList">IdentityDomainsApprovalWorkflowTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsApprovalWorkflowTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference">IdentityDomainsApprovalWorkflowTimeoutsOutputReference</a>

---

##### `approvalWorkflowStepsInput`<sup>Optional</sup> <a name="approvalWorkflowStepsInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.approvalWorkflowStepsInput"></a>

```typescript
public readonly approvalWorkflowStepsInput: IResolvable | IdentityDomainsApprovalWorkflowApprovalWorkflowSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>[]

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `maxDurationInput`<sup>Optional</sup> <a name="maxDurationInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.maxDurationInput"></a>

```typescript
public readonly maxDurationInput: IdentityDomainsApprovalWorkflowMaxDuration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.schemasInput"></a>

```typescript
public readonly schemasInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IdentityDomainsApprovalWorkflowTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityDomainsApprovalWorkflowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsApprovalWorkflowApprovalWorkflowSteps <a name="IdentityDomainsApprovalWorkflowApprovalWorkflowSteps" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowApprovalWorkflowSteps: identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#type IdentityDomainsApprovalWorkflow#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#ocid IdentityDomainsApprovalWorkflow#ocid}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#type IdentityDomainsApprovalWorkflow#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#ocid IdentityDomainsApprovalWorkflow#ocid}.

---

### IdentityDomainsApprovalWorkflowConfig <a name="IdentityDomainsApprovalWorkflowConfig" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowConfig: identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#idcs_endpoint IdentityDomainsApprovalWorkflow#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.maxDuration">maxDuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a></code> | max_duration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#name IdentityDomainsApprovalWorkflow#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.schemas">schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#schemas IdentityDomainsApprovalWorkflow#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.approvalWorkflowSteps">approvalWorkflowSteps</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>[]</code> | approval_workflow_steps block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#attributes IdentityDomainsApprovalWorkflow#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#attribute_sets IdentityDomainsApprovalWorkflow#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#authorization IdentityDomainsApprovalWorkflow#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#description IdentityDomainsApprovalWorkflow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#ocid IdentityDomainsApprovalWorkflow#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#resource_type_schema_version IdentityDomainsApprovalWorkflow#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>[]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#idcs_endpoint IdentityDomainsApprovalWorkflow#idcs_endpoint}.

---

##### `maxDuration`<sup>Required</sup> <a name="maxDuration" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.maxDuration"></a>

```typescript
public readonly maxDuration: IdentityDomainsApprovalWorkflowMaxDuration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a>

max_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#max_duration IdentityDomainsApprovalWorkflow#max_duration}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#name IdentityDomainsApprovalWorkflow#name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#schemas IdentityDomainsApprovalWorkflow#schemas}.

---

##### `approvalWorkflowSteps`<sup>Optional</sup> <a name="approvalWorkflowSteps" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.approvalWorkflowSteps"></a>

```typescript
public readonly approvalWorkflowSteps: IResolvable | IdentityDomainsApprovalWorkflowApprovalWorkflowSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>[]

approval_workflow_steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#approval_workflow_steps IdentityDomainsApprovalWorkflow#approval_workflow_steps}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#attributes IdentityDomainsApprovalWorkflow#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#attribute_sets IdentityDomainsApprovalWorkflow#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#authorization IdentityDomainsApprovalWorkflow#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#description IdentityDomainsApprovalWorkflow#description}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#ocid IdentityDomainsApprovalWorkflow#ocid}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#resource_type_schema_version IdentityDomainsApprovalWorkflow#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IdentityDomainsApprovalWorkflowTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#tags IdentityDomainsApprovalWorkflow#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsApprovalWorkflowTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#timeouts IdentityDomainsApprovalWorkflow#timeouts}

---

### IdentityDomainsApprovalWorkflowIdcsCreatedBy <a name="IdentityDomainsApprovalWorkflowIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedBy.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowIdcsCreatedBy: identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedBy = { ... }
```


### IdentityDomainsApprovalWorkflowIdcsLastModifiedBy <a name="IdentityDomainsApprovalWorkflowIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedBy.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowIdcsLastModifiedBy: identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedBy = { ... }
```


### IdentityDomainsApprovalWorkflowMaxDuration <a name="IdentityDomainsApprovalWorkflowMaxDuration" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowMaxDuration: identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#unit IdentityDomainsApprovalWorkflow#unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#unit IdentityDomainsApprovalWorkflow#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}.

---

### IdentityDomainsApprovalWorkflowMeta <a name="IdentityDomainsApprovalWorkflowMeta" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMeta.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowMeta: identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMeta = { ... }
```


### IdentityDomainsApprovalWorkflowTags <a name="IdentityDomainsApprovalWorkflowTags" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowTags: identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#key IdentityDomainsApprovalWorkflow#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#key IdentityDomainsApprovalWorkflow#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#value IdentityDomainsApprovalWorkflow#value}.

---

### IdentityDomainsApprovalWorkflowTimeouts <a name="IdentityDomainsApprovalWorkflowTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

const identityDomainsApprovalWorkflowTimeouts: identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#create IdentityDomainsApprovalWorkflow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#delete IdentityDomainsApprovalWorkflow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#update IdentityDomainsApprovalWorkflow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#create IdentityDomainsApprovalWorkflow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#delete IdentityDomainsApprovalWorkflow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_approval_workflow#update IdentityDomainsApprovalWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList <a name="IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.get"></a>

```typescript
public get(index: number): IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsApprovalWorkflowApprovalWorkflowSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>[]

---


### IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference <a name="IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.resetOcid">resetOcid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.resetOcid"></a>

```typescript
public resetOcid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsApprovalWorkflowApprovalWorkflowSteps;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowApprovalWorkflowSteps">IdentityDomainsApprovalWorkflowApprovalWorkflowSteps</a>

---


### IdentityDomainsApprovalWorkflowIdcsCreatedByList <a name="IdentityDomainsApprovalWorkflowIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference <a name="IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedBy">IdentityDomainsApprovalWorkflowIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsApprovalWorkflowIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsCreatedBy">IdentityDomainsApprovalWorkflowIdcsCreatedBy</a>

---


### IdentityDomainsApprovalWorkflowIdcsLastModifiedByList <a name="IdentityDomainsApprovalWorkflowIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference <a name="IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedBy">IdentityDomainsApprovalWorkflowIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsApprovalWorkflowIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowIdcsLastModifiedBy">IdentityDomainsApprovalWorkflowIdcsLastModifiedBy</a>

---


### IdentityDomainsApprovalWorkflowMaxDurationOutputReference <a name="IdentityDomainsApprovalWorkflowMaxDurationOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsApprovalWorkflowMaxDuration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMaxDuration">IdentityDomainsApprovalWorkflowMaxDuration</a>

---


### IdentityDomainsApprovalWorkflowMetaList <a name="IdentityDomainsApprovalWorkflowMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.get"></a>

```typescript
public get(index: number): IdentityDomainsApprovalWorkflowMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsApprovalWorkflowMetaOutputReference <a name="IdentityDomainsApprovalWorkflowMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMeta">IdentityDomainsApprovalWorkflowMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsApprovalWorkflowMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowMeta">IdentityDomainsApprovalWorkflowMeta</a>

---


### IdentityDomainsApprovalWorkflowTagsList <a name="IdentityDomainsApprovalWorkflowTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.get"></a>

```typescript
public get(index: number): IdentityDomainsApprovalWorkflowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsApprovalWorkflowTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>[]

---


### IdentityDomainsApprovalWorkflowTagsOutputReference <a name="IdentityDomainsApprovalWorkflowTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsApprovalWorkflowTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTags">IdentityDomainsApprovalWorkflowTags</a>

---


### IdentityDomainsApprovalWorkflowTimeoutsOutputReference <a name="IdentityDomainsApprovalWorkflowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityDomainsApprovalWorkflow } from 'rhizo-co-terraform-provider-oci'

new identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsApprovalWorkflowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsApprovalWorkflow.IdentityDomainsApprovalWorkflowTimeouts">IdentityDomainsApprovalWorkflowTimeouts</a>

---


