# `opsiExadataInsight` Submodule <a name="`opsiExadataInsight` Submodule" id="rhizo-co-terraform-provider-oci.opsiExadataInsight"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiExadataInsight <a name="OpsiExadataInsight" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight oci_opsi_exadata_insight}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

new opsiExadataInsight.OpsiExadataInsight(scope: Construct, id: string, config: OpsiExadataInsightConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig">OpsiExadataInsightConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig">OpsiExadataInsightConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.putMemberVmClusterDetails">putMemberVmClusterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetEnterpriseManagerBridgeId">resetEnterpriseManagerBridgeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetEnterpriseManagerEntityIdentifier">resetEnterpriseManagerEntityIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetEnterpriseManagerIdentifier">resetEnterpriseManagerIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetExadataInfraId">resetExadataInfraId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetIsAutoSyncEnabled">resetIsAutoSyncEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetMemberVmClusterDetails">resetMemberVmClusterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMemberVmClusterDetails` <a name="putMemberVmClusterDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.putMemberVmClusterDetails"></a>

```typescript
public putMemberVmClusterDetails(value: IResolvable | OpsiExadataInsightMemberVmClusterDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.putMemberVmClusterDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails">OpsiExadataInsightMemberVmClusterDetails</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.putTimeouts"></a>

```typescript
public putTimeouts(value: OpsiExadataInsightTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts">OpsiExadataInsightTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetEnterpriseManagerBridgeId` <a name="resetEnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetEnterpriseManagerBridgeId"></a>

```typescript
public resetEnterpriseManagerBridgeId(): void
```

##### `resetEnterpriseManagerEntityIdentifier` <a name="resetEnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetEnterpriseManagerEntityIdentifier"></a>

```typescript
public resetEnterpriseManagerEntityIdentifier(): void
```

##### `resetEnterpriseManagerIdentifier` <a name="resetEnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetEnterpriseManagerIdentifier"></a>

```typescript
public resetEnterpriseManagerIdentifier(): void
```

##### `resetExadataInfraId` <a name="resetExadataInfraId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetExadataInfraId"></a>

```typescript
public resetExadataInfraId(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAutoSyncEnabled` <a name="resetIsAutoSyncEnabled" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetIsAutoSyncEnabled"></a>

```typescript
public resetIsAutoSyncEnabled(): void
```

##### `resetMemberVmClusterDetails` <a name="resetMemberVmClusterDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetMemberVmClusterDetails"></a>

```typescript
public resetMemberVmClusterDetails(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiExadataInsight resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isConstruct"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

opsiExadataInsight.OpsiExadataInsight.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isTerraformElement"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

opsiExadataInsight.OpsiExadataInsight.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isTerraformResource"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

opsiExadataInsight.OpsiExadataInsight.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.generateConfigForImport"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

opsiExadataInsight.OpsiExadataInsight.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpsiExadataInsight resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsiExadataInsight to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsiExadataInsight that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsiExadataInsight to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityDisplayName">enterpriseManagerEntityDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityName">enterpriseManagerEntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityType">enterpriseManagerEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataDisplayName">exadataDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataInfraResourceType">exadataInfraResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataName">exadataName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataRackType">exadataRackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataShape">exadataShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataType">exadataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.isVirtualizedExadata">isVirtualizedExadata</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.memberVmClusterDetails">memberVmClusterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList">OpsiExadataInsightMemberVmClusterDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference">OpsiExadataInsightTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerBridgeIdInput">enterpriseManagerBridgeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityIdentifierInput">enterpriseManagerEntityIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerIdentifierInput">enterpriseManagerIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.entitySourceInput">entitySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataInfraIdInput">exadataInfraIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.isAutoSyncEnabledInput">isAutoSyncEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.memberVmClusterDetailsInput">memberVmClusterDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails">OpsiExadataInsightMemberVmClusterDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts">OpsiExadataInsightTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityIdentifier">enterpriseManagerEntityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerIdentifier">enterpriseManagerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.entitySource">entitySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataInfraId">exadataInfraId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.isAutoSyncEnabled">isAutoSyncEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enterpriseManagerEntityDisplayName`<sup>Required</sup> <a name="enterpriseManagerEntityDisplayName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityDisplayName"></a>

```typescript
public readonly enterpriseManagerEntityDisplayName: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityName`<sup>Required</sup> <a name="enterpriseManagerEntityName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityName"></a>

```typescript
public readonly enterpriseManagerEntityName: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityType`<sup>Required</sup> <a name="enterpriseManagerEntityType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityType"></a>

```typescript
public readonly enterpriseManagerEntityType: string;
```

- *Type:* string

---

##### `exadataDisplayName`<sup>Required</sup> <a name="exadataDisplayName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataDisplayName"></a>

```typescript
public readonly exadataDisplayName: string;
```

- *Type:* string

---

##### `exadataInfraResourceType`<sup>Required</sup> <a name="exadataInfraResourceType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataInfraResourceType"></a>

```typescript
public readonly exadataInfraResourceType: string;
```

- *Type:* string

---

##### `exadataName`<sup>Required</sup> <a name="exadataName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataName"></a>

```typescript
public readonly exadataName: string;
```

- *Type:* string

---

##### `exadataRackType`<sup>Required</sup> <a name="exadataRackType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataRackType"></a>

```typescript
public readonly exadataRackType: string;
```

- *Type:* string

---

##### `exadataShape`<sup>Required</sup> <a name="exadataShape" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataShape"></a>

```typescript
public readonly exadataShape: string;
```

- *Type:* string

---

##### `exadataType`<sup>Required</sup> <a name="exadataType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataType"></a>

```typescript
public readonly exadataType: string;
```

- *Type:* string

---

##### `isVirtualizedExadata`<sup>Required</sup> <a name="isVirtualizedExadata" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.isVirtualizedExadata"></a>

```typescript
public readonly isVirtualizedExadata: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `memberVmClusterDetails`<sup>Required</sup> <a name="memberVmClusterDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.memberVmClusterDetails"></a>

```typescript
public readonly memberVmClusterDetails: OpsiExadataInsightMemberVmClusterDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList">OpsiExadataInsightMemberVmClusterDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeouts"></a>

```typescript
public readonly timeouts: OpsiExadataInsightTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference">OpsiExadataInsightTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enterpriseManagerBridgeIdInput`<sup>Optional</sup> <a name="enterpriseManagerBridgeIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerBridgeIdInput"></a>

```typescript
public readonly enterpriseManagerBridgeIdInput: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityIdentifierInput`<sup>Optional</sup> <a name="enterpriseManagerEntityIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityIdentifierInput"></a>

```typescript
public readonly enterpriseManagerEntityIdentifierInput: string;
```

- *Type:* string

---

##### `enterpriseManagerIdentifierInput`<sup>Optional</sup> <a name="enterpriseManagerIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerIdentifierInput"></a>

```typescript
public readonly enterpriseManagerIdentifierInput: string;
```

- *Type:* string

---

##### `entitySourceInput`<sup>Optional</sup> <a name="entitySourceInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.entitySourceInput"></a>

```typescript
public readonly entitySourceInput: string;
```

- *Type:* string

---

##### `exadataInfraIdInput`<sup>Optional</sup> <a name="exadataInfraIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataInfraIdInput"></a>

```typescript
public readonly exadataInfraIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAutoSyncEnabledInput`<sup>Optional</sup> <a name="isAutoSyncEnabledInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.isAutoSyncEnabledInput"></a>

```typescript
public readonly isAutoSyncEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memberVmClusterDetailsInput`<sup>Optional</sup> <a name="memberVmClusterDetailsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.memberVmClusterDetailsInput"></a>

```typescript
public readonly memberVmClusterDetailsInput: IResolvable | OpsiExadataInsightMemberVmClusterDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails">OpsiExadataInsightMemberVmClusterDetails</a>[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpsiExadataInsightTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts">OpsiExadataInsightTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enterpriseManagerBridgeId`<sup>Required</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerBridgeId"></a>

```typescript
public readonly enterpriseManagerBridgeId: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityIdentifier`<sup>Required</sup> <a name="enterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityIdentifier"></a>

```typescript
public readonly enterpriseManagerEntityIdentifier: string;
```

- *Type:* string

---

##### `enterpriseManagerIdentifier`<sup>Required</sup> <a name="enterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerIdentifier"></a>

```typescript
public readonly enterpriseManagerIdentifier: string;
```

- *Type:* string

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.entitySource"></a>

```typescript
public readonly entitySource: string;
```

- *Type:* string

---

##### `exadataInfraId`<sup>Required</sup> <a name="exadataInfraId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataInfraId"></a>

```typescript
public readonly exadataInfraId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutoSyncEnabled`<sup>Required</sup> <a name="isAutoSyncEnabled" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.isAutoSyncEnabled"></a>

```typescript
public readonly isAutoSyncEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiExadataInsightConfig <a name="OpsiExadataInsightConfig" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

const opsiExadataInsightConfig: opsiExadataInsight.OpsiExadataInsightConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.entitySource">entitySource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#entity_source OpsiExadataInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#defined_tags OpsiExadataInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#enterprise_manager_bridge_id OpsiExadataInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.enterpriseManagerEntityIdentifier">enterpriseManagerEntityIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#enterprise_manager_entity_identifier OpsiExadataInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.enterpriseManagerIdentifier">enterpriseManagerIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#enterprise_manager_identifier OpsiExadataInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.exadataInfraId">exadataInfraId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#exadata_infra_id OpsiExadataInsight#exadata_infra_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#freeform_tags OpsiExadataInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#id OpsiExadataInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.isAutoSyncEnabled">isAutoSyncEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#is_auto_sync_enabled OpsiExadataInsight#is_auto_sync_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.memberVmClusterDetails">memberVmClusterDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails">OpsiExadataInsightMemberVmClusterDetails</a>[]</code> | member_vm_cluster_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#status OpsiExadataInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts">OpsiExadataInsightTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}.

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.entitySource"></a>

```typescript
public readonly entitySource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#entity_source OpsiExadataInsight#entity_source}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#defined_tags OpsiExadataInsight#defined_tags}.

---

##### `enterpriseManagerBridgeId`<sup>Optional</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.enterpriseManagerBridgeId"></a>

```typescript
public readonly enterpriseManagerBridgeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#enterprise_manager_bridge_id OpsiExadataInsight#enterprise_manager_bridge_id}.

---

##### `enterpriseManagerEntityIdentifier`<sup>Optional</sup> <a name="enterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.enterpriseManagerEntityIdentifier"></a>

```typescript
public readonly enterpriseManagerEntityIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#enterprise_manager_entity_identifier OpsiExadataInsight#enterprise_manager_entity_identifier}.

---

##### `enterpriseManagerIdentifier`<sup>Optional</sup> <a name="enterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.enterpriseManagerIdentifier"></a>

```typescript
public readonly enterpriseManagerIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#enterprise_manager_identifier OpsiExadataInsight#enterprise_manager_identifier}.

---

##### `exadataInfraId`<sup>Optional</sup> <a name="exadataInfraId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.exadataInfraId"></a>

```typescript
public readonly exadataInfraId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#exadata_infra_id OpsiExadataInsight#exadata_infra_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#freeform_tags OpsiExadataInsight#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#id OpsiExadataInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAutoSyncEnabled`<sup>Optional</sup> <a name="isAutoSyncEnabled" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.isAutoSyncEnabled"></a>

```typescript
public readonly isAutoSyncEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#is_auto_sync_enabled OpsiExadataInsight#is_auto_sync_enabled}.

---

##### `memberVmClusterDetails`<sup>Optional</sup> <a name="memberVmClusterDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.memberVmClusterDetails"></a>

```typescript
public readonly memberVmClusterDetails: IResolvable | OpsiExadataInsightMemberVmClusterDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails">OpsiExadataInsightMemberVmClusterDetails</a>[]

member_vm_cluster_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#member_vm_cluster_details OpsiExadataInsight#member_vm_cluster_details}

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#status OpsiExadataInsight#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpsiExadataInsightTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts">OpsiExadataInsightTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#timeouts OpsiExadataInsight#timeouts}

---

### OpsiExadataInsightMemberVmClusterDetails <a name="OpsiExadataInsightMemberVmClusterDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

const opsiExadataInsightMemberVmClusterDetails: opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.dbmPrivateEndpointId">dbmPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#dbm_private_endpoint_id OpsiExadataInsight#dbm_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.memberDatabaseDetails">memberDatabaseDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails</a>[]</code> | member_database_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#opsi_private_endpoint_id OpsiExadataInsight#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.vmclusterId">vmclusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#vmcluster_id OpsiExadataInsight#vmcluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.vmClusterType">vmClusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#vm_cluster_type OpsiExadataInsight#vm_cluster_type}. |

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}.

---

##### `dbmPrivateEndpointId`<sup>Optional</sup> <a name="dbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.dbmPrivateEndpointId"></a>

```typescript
public readonly dbmPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#dbm_private_endpoint_id OpsiExadataInsight#dbm_private_endpoint_id}.

---

##### `memberDatabaseDetails`<sup>Optional</sup> <a name="memberDatabaseDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.memberDatabaseDetails"></a>

```typescript
public readonly memberDatabaseDetails: IResolvable | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails</a>[]

member_database_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#member_database_details OpsiExadataInsight#member_database_details}

---

##### `opsiPrivateEndpointId`<sup>Optional</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.opsiPrivateEndpointId"></a>

```typescript
public readonly opsiPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#opsi_private_endpoint_id OpsiExadataInsight#opsi_private_endpoint_id}.

---

##### `vmclusterId`<sup>Optional</sup> <a name="vmclusterId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.vmclusterId"></a>

```typescript
public readonly vmclusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#vmcluster_id OpsiExadataInsight#vmcluster_id}.

---

##### `vmClusterType`<sup>Optional</sup> <a name="vmClusterType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.vmClusterType"></a>

```typescript
public readonly vmClusterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#vm_cluster_type OpsiExadataInsight#vm_cluster_type}.

---

### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

const opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails: opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.connectionCredentialDetails">connectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a></code> | connection_credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.connectionDetails">connectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a></code> | connection_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.credentialDetails">credentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a></code> | credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.databaseId">databaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#database_id OpsiExadataInsight#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.databaseResourceType">databaseResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#database_resource_type OpsiExadataInsight#database_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.dbmPrivateEndpointId">dbmPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#dbm_private_endpoint_id OpsiExadataInsight#dbm_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#defined_tags OpsiExadataInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.deploymentType">deploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#deployment_type OpsiExadataInsight#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.entitySource">entitySource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#entity_source OpsiExadataInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#freeform_tags OpsiExadataInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#management_agent_id OpsiExadataInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#opsi_private_endpoint_id OpsiExadataInsight#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#service_name OpsiExadataInsight#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.systemTags">systemTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#system_tags OpsiExadataInsight#system_tags}. |

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}.

---

##### `connectionCredentialDetails`<sup>Optional</sup> <a name="connectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.connectionCredentialDetails"></a>

```typescript
public readonly connectionCredentialDetails: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a>

connection_credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#connection_credential_details OpsiExadataInsight#connection_credential_details}

---

##### `connectionDetails`<sup>Optional</sup> <a name="connectionDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.connectionDetails"></a>

```typescript
public readonly connectionDetails: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a>

connection_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#connection_details OpsiExadataInsight#connection_details}

---

##### `credentialDetails`<sup>Optional</sup> <a name="credentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.credentialDetails"></a>

```typescript
public readonly credentialDetails: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a>

credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_details OpsiExadataInsight#credential_details}

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#database_id OpsiExadataInsight#database_id}.

---

##### `databaseResourceType`<sup>Optional</sup> <a name="databaseResourceType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.databaseResourceType"></a>

```typescript
public readonly databaseResourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#database_resource_type OpsiExadataInsight#database_resource_type}.

---

##### `dbmPrivateEndpointId`<sup>Optional</sup> <a name="dbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.dbmPrivateEndpointId"></a>

```typescript
public readonly dbmPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#dbm_private_endpoint_id OpsiExadataInsight#dbm_private_endpoint_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#defined_tags OpsiExadataInsight#defined_tags}.

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#deployment_type OpsiExadataInsight#deployment_type}.

---

##### `entitySource`<sup>Optional</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.entitySource"></a>

```typescript
public readonly entitySource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#entity_source OpsiExadataInsight#entity_source}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#freeform_tags OpsiExadataInsight#freeform_tags}.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#management_agent_id OpsiExadataInsight#management_agent_id}.

---

##### `opsiPrivateEndpointId`<sup>Optional</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.opsiPrivateEndpointId"></a>

```typescript
public readonly opsiPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#opsi_private_endpoint_id OpsiExadataInsight#opsi_private_endpoint_id}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#service_name OpsiExadataInsight#service_name}.

---

##### `systemTags`<sup>Optional</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.systemTags"></a>

```typescript
public readonly systemTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#system_tags OpsiExadataInsight#system_tags}.

---

### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

const opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails: opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.credentialType">credentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_type OpsiExadataInsight#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.credentialSourceName">credentialSourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_source_name OpsiExadataInsight#credential_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#password_secret_id OpsiExadataInsight#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#role OpsiExadataInsight#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#user_name OpsiExadataInsight#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.walletSecretId">walletSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#wallet_secret_id OpsiExadataInsight#wallet_secret_id}. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_type OpsiExadataInsight#credential_type}.

---

##### `credentialSourceName`<sup>Optional</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.credentialSourceName"></a>

```typescript
public readonly credentialSourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_source_name OpsiExadataInsight#credential_source_name}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#password_secret_id OpsiExadataInsight#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#role OpsiExadataInsight#role}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#user_name OpsiExadataInsight#user_name}.

---

##### `walletSecretId`<sup>Optional</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.walletSecretId"></a>

```typescript
public readonly walletSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#wallet_secret_id OpsiExadataInsight#wallet_secret_id}.

---

### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

const opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails: opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#host_name OpsiExadataInsight#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.hosts">hosts</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a>[]</code> | hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#port OpsiExadataInsight#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#protocol OpsiExadataInsight#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#service_name OpsiExadataInsight#service_name}. |

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#host_name OpsiExadataInsight#host_name}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.hosts"></a>

```typescript
public readonly hosts: IResolvable | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a>[]

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#hosts OpsiExadataInsight#hosts}

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#port OpsiExadataInsight#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#protocol OpsiExadataInsight#protocol}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#service_name OpsiExadataInsight#service_name}.

---

### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

const opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts: opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts.property.hostIp">hostIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#host_ip OpsiExadataInsight#host_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#port OpsiExadataInsight#port}. |

---

##### `hostIp`<sup>Optional</sup> <a name="hostIp" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts.property.hostIp"></a>

```typescript
public readonly hostIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#host_ip OpsiExadataInsight#host_ip}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#port OpsiExadataInsight#port}.

---

### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

const opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails: opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.credentialType">credentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_type OpsiExadataInsight#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.credentialSourceName">credentialSourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_source_name OpsiExadataInsight#credential_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#password_secret_id OpsiExadataInsight#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#role OpsiExadataInsight#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#user_name OpsiExadataInsight#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.walletSecretId">walletSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#wallet_secret_id OpsiExadataInsight#wallet_secret_id}. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_type OpsiExadataInsight#credential_type}.

---

##### `credentialSourceName`<sup>Optional</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.credentialSourceName"></a>

```typescript
public readonly credentialSourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_source_name OpsiExadataInsight#credential_source_name}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#password_secret_id OpsiExadataInsight#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#role OpsiExadataInsight#role}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#user_name OpsiExadataInsight#user_name}.

---

##### `walletSecretId`<sup>Optional</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.walletSecretId"></a>

```typescript
public readonly walletSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#wallet_secret_id OpsiExadataInsight#wallet_secret_id}.

---

### OpsiExadataInsightTimeouts <a name="OpsiExadataInsightTimeouts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

const opsiExadataInsightTimeouts: opsiExadataInsight.OpsiExadataInsightTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#create OpsiExadataInsight#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#delete OpsiExadataInsight#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#update OpsiExadataInsight#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#create OpsiExadataInsight#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#delete OpsiExadataInsight#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#update OpsiExadataInsight#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiExadataInsightMemberVmClusterDetailsList <a name="OpsiExadataInsightMemberVmClusterDetailsList" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

new opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.get"></a>

```typescript
public get(index: number): OpsiExadataInsightMemberVmClusterDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails">OpsiExadataInsightMemberVmClusterDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiExadataInsightMemberVmClusterDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails">OpsiExadataInsightMemberVmClusterDetails</a>[]

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

new opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetCredentialSourceName">resetCredentialSourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetWalletSecretId">resetWalletSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialSourceName` <a name="resetCredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetCredentialSourceName"></a>

```typescript
public resetCredentialSourceName(): void
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetPasswordSecretId"></a>

```typescript
public resetPasswordSecretId(): void
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```

##### `resetWalletSecretId` <a name="resetWalletSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetWalletSecretId"></a>

```typescript
public resetWalletSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialSourceNameInput">credentialSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.walletSecretIdInput">walletSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialSourceName">credentialSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.walletSecretId">walletSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialSourceNameInput`<sup>Optional</sup> <a name="credentialSourceNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialSourceNameInput"></a>

```typescript
public readonly credentialSourceNameInput: string;
```

- *Type:* string

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```typescript
public readonly passwordSecretIdInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `walletSecretIdInput`<sup>Optional</sup> <a name="walletSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.walletSecretIdInput"></a>

```typescript
public readonly walletSecretIdInput: string;
```

- *Type:* string

---

##### `credentialSourceName`<sup>Required</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```typescript
public readonly credentialSourceName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `walletSecretId`<sup>Required</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.walletSecretId"></a>

```typescript
public readonly walletSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a>

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

new opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.get"></a>

```typescript
public get(index: number): OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a>[]

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

new opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resetHostIp">resetHostIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostIp` <a name="resetHostIp" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resetHostIp"></a>

```typescript
public resetHostIp(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.hostIpInput">hostIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.hostIp">hostIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostIpInput`<sup>Optional</sup> <a name="hostIpInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.hostIpInput"></a>

```typescript
public readonly hostIpInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `hostIp`<sup>Required</sup> <a name="hostIp" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.hostIp"></a>

```typescript
public readonly hostIp: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a>

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

new opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.putHosts">putHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHosts` <a name="putHosts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.putHosts"></a>

```typescript
public putHosts(value: IResolvable | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.putHosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a>[]

---

##### `resetHostName` <a name="resetHostName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetHosts` <a name="resetHosts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetHosts"></a>

```typescript
public resetHosts(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetServiceName` <a name="resetServiceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hosts">hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostsInput">hostsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hosts"></a>

```typescript
public readonly hosts: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList</a>

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostsInput"></a>

```typescript
public readonly hostsInput: IResolvable | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a>[]

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a>

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

new opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetCredentialSourceName">resetCredentialSourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetWalletSecretId">resetWalletSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialSourceName` <a name="resetCredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetCredentialSourceName"></a>

```typescript
public resetCredentialSourceName(): void
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetPasswordSecretId"></a>

```typescript
public resetPasswordSecretId(): void
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```

##### `resetWalletSecretId` <a name="resetWalletSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetWalletSecretId"></a>

```typescript
public resetWalletSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialSourceNameInput">credentialSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.walletSecretIdInput">walletSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialSourceName">credentialSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.walletSecretId">walletSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialSourceNameInput`<sup>Optional</sup> <a name="credentialSourceNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialSourceNameInput"></a>

```typescript
public readonly credentialSourceNameInput: string;
```

- *Type:* string

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```typescript
public readonly passwordSecretIdInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `walletSecretIdInput`<sup>Optional</sup> <a name="walletSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.walletSecretIdInput"></a>

```typescript
public readonly walletSecretIdInput: string;
```

- *Type:* string

---

##### `credentialSourceName`<sup>Required</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialSourceName"></a>

```typescript
public readonly credentialSourceName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `walletSecretId`<sup>Required</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.walletSecretId"></a>

```typescript
public readonly walletSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a>

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

new opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.get"></a>

```typescript
public get(index: number): OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails</a>[]

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

new opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putConnectionCredentialDetails">putConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putConnectionDetails">putConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putCredentialDetails">putCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetConnectionCredentialDetails">resetConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetConnectionDetails">resetConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetCredentialDetails">resetCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDatabaseResourceType">resetDatabaseResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDbmPrivateEndpointId">resetDbmPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetEntitySource">resetEntitySource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetManagementAgentId">resetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetOpsiPrivateEndpointId">resetOpsiPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetSystemTags">resetSystemTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectionCredentialDetails` <a name="putConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putConnectionCredentialDetails"></a>

```typescript
public putConnectionCredentialDetails(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putConnectionCredentialDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a>

---

##### `putConnectionDetails` <a name="putConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putConnectionDetails"></a>

```typescript
public putConnectionDetails(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putConnectionDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a>

---

##### `putCredentialDetails` <a name="putCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putCredentialDetails"></a>

```typescript
public putCredentialDetails(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putCredentialDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetConnectionCredentialDetails` <a name="resetConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetConnectionCredentialDetails"></a>

```typescript
public resetConnectionCredentialDetails(): void
```

##### `resetConnectionDetails` <a name="resetConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetConnectionDetails"></a>

```typescript
public resetConnectionDetails(): void
```

##### `resetCredentialDetails` <a name="resetCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetCredentialDetails"></a>

```typescript
public resetCredentialDetails(): void
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDatabaseId"></a>

```typescript
public resetDatabaseId(): void
```

##### `resetDatabaseResourceType` <a name="resetDatabaseResourceType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDatabaseResourceType"></a>

```typescript
public resetDatabaseResourceType(): void
```

##### `resetDbmPrivateEndpointId` <a name="resetDbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDbmPrivateEndpointId"></a>

```typescript
public resetDbmPrivateEndpointId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDeploymentType"></a>

```typescript
public resetDeploymentType(): void
```

##### `resetEntitySource` <a name="resetEntitySource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetEntitySource"></a>

```typescript
public resetEntitySource(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetManagementAgentId` <a name="resetManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetManagementAgentId"></a>

```typescript
public resetManagementAgentId(): void
```

##### `resetOpsiPrivateEndpointId` <a name="resetOpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetOpsiPrivateEndpointId"></a>

```typescript
public resetOpsiPrivateEndpointId(): void
```

##### `resetServiceName` <a name="resetServiceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetSystemTags` <a name="resetSystemTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetSystemTags"></a>

```typescript
public resetSystemTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionCredentialDetails">connectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionDetails">connectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.credentialDetails">credentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionCredentialDetailsInput">connectionCredentialDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionDetailsInput">connectionDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.credentialDetailsInput">credentialDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseResourceTypeInput">databaseResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.dbmPrivateEndpointIdInput">dbmPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.entitySourceInput">entitySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.opsiPrivateEndpointIdInput">opsiPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.systemTagsInput">systemTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseResourceType">databaseResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.dbmPrivateEndpointId">dbmPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.entitySource">entitySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.systemTags">systemTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionCredentialDetails`<sup>Required</sup> <a name="connectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionCredentialDetails"></a>

```typescript
public readonly connectionCredentialDetails: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference</a>

---

##### `connectionDetails`<sup>Required</sup> <a name="connectionDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionDetails"></a>

```typescript
public readonly connectionDetails: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference</a>

---

##### `credentialDetails`<sup>Required</sup> <a name="credentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.credentialDetails"></a>

```typescript
public readonly credentialDetails: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `connectionCredentialDetailsInput`<sup>Optional</sup> <a name="connectionCredentialDetailsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionCredentialDetailsInput"></a>

```typescript
public readonly connectionCredentialDetailsInput: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a>

---

##### `connectionDetailsInput`<sup>Optional</sup> <a name="connectionDetailsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionDetailsInput"></a>

```typescript
public readonly connectionDetailsInput: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a>

---

##### `credentialDetailsInput`<sup>Optional</sup> <a name="credentialDetailsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.credentialDetailsInput"></a>

```typescript
public readonly credentialDetailsInput: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a>

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `databaseResourceTypeInput`<sup>Optional</sup> <a name="databaseResourceTypeInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseResourceTypeInput"></a>

```typescript
public readonly databaseResourceTypeInput: string;
```

- *Type:* string

---

##### `dbmPrivateEndpointIdInput`<sup>Optional</sup> <a name="dbmPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.dbmPrivateEndpointIdInput"></a>

```typescript
public readonly dbmPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `entitySourceInput`<sup>Optional</sup> <a name="entitySourceInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.entitySourceInput"></a>

```typescript
public readonly entitySourceInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.managementAgentIdInput"></a>

```typescript
public readonly managementAgentIdInput: string;
```

- *Type:* string

---

##### `opsiPrivateEndpointIdInput`<sup>Optional</sup> <a name="opsiPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.opsiPrivateEndpointIdInput"></a>

```typescript
public readonly opsiPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `systemTagsInput`<sup>Optional</sup> <a name="systemTagsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.systemTagsInput"></a>

```typescript
public readonly systemTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseResourceType`<sup>Required</sup> <a name="databaseResourceType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseResourceType"></a>

```typescript
public readonly databaseResourceType: string;
```

- *Type:* string

---

##### `dbmPrivateEndpointId`<sup>Required</sup> <a name="dbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.dbmPrivateEndpointId"></a>

```typescript
public readonly dbmPrivateEndpointId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.entitySource"></a>

```typescript
public readonly entitySource: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `opsiPrivateEndpointId`<sup>Required</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.opsiPrivateEndpointId"></a>

```typescript
public readonly opsiPrivateEndpointId: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails</a>

---


### OpsiExadataInsightMemberVmClusterDetailsOutputReference <a name="OpsiExadataInsightMemberVmClusterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

new opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.putMemberDatabaseDetails">putMemberDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetDbmPrivateEndpointId">resetDbmPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetMemberDatabaseDetails">resetMemberDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetOpsiPrivateEndpointId">resetOpsiPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetVmclusterId">resetVmclusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetVmClusterType">resetVmClusterType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMemberDatabaseDetails` <a name="putMemberDatabaseDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.putMemberDatabaseDetails"></a>

```typescript
public putMemberDatabaseDetails(value: IResolvable | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.putMemberDatabaseDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDbmPrivateEndpointId` <a name="resetDbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetDbmPrivateEndpointId"></a>

```typescript
public resetDbmPrivateEndpointId(): void
```

##### `resetMemberDatabaseDetails` <a name="resetMemberDatabaseDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetMemberDatabaseDetails"></a>

```typescript
public resetMemberDatabaseDetails(): void
```

##### `resetOpsiPrivateEndpointId` <a name="resetOpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetOpsiPrivateEndpointId"></a>

```typescript
public resetOpsiPrivateEndpointId(): void
```

##### `resetVmclusterId` <a name="resetVmclusterId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetVmclusterId"></a>

```typescript
public resetVmclusterId(): void
```

##### `resetVmClusterType` <a name="resetVmClusterType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetVmClusterType"></a>

```typescript
public resetVmClusterType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.memberDatabaseDetails">memberDatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.dbmPrivateEndpointIdInput">dbmPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.memberDatabaseDetailsInput">memberDatabaseDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.opsiPrivateEndpointIdInput">opsiPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmclusterIdInput">vmclusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmClusterTypeInput">vmClusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.dbmPrivateEndpointId">dbmPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmclusterId">vmclusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmClusterType">vmClusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails">OpsiExadataInsightMemberVmClusterDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memberDatabaseDetails`<sup>Required</sup> <a name="memberDatabaseDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.memberDatabaseDetails"></a>

```typescript
public readonly memberDatabaseDetails: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dbmPrivateEndpointIdInput`<sup>Optional</sup> <a name="dbmPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.dbmPrivateEndpointIdInput"></a>

```typescript
public readonly dbmPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `memberDatabaseDetailsInput`<sup>Optional</sup> <a name="memberDatabaseDetailsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.memberDatabaseDetailsInput"></a>

```typescript
public readonly memberDatabaseDetailsInput: IResolvable | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails</a>[]

---

##### `opsiPrivateEndpointIdInput`<sup>Optional</sup> <a name="opsiPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.opsiPrivateEndpointIdInput"></a>

```typescript
public readonly opsiPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `vmclusterIdInput`<sup>Optional</sup> <a name="vmclusterIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmclusterIdInput"></a>

```typescript
public readonly vmclusterIdInput: string;
```

- *Type:* string

---

##### `vmClusterTypeInput`<sup>Optional</sup> <a name="vmClusterTypeInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmClusterTypeInput"></a>

```typescript
public readonly vmClusterTypeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dbmPrivateEndpointId`<sup>Required</sup> <a name="dbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.dbmPrivateEndpointId"></a>

```typescript
public readonly dbmPrivateEndpointId: string;
```

- *Type:* string

---

##### `opsiPrivateEndpointId`<sup>Required</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.opsiPrivateEndpointId"></a>

```typescript
public readonly opsiPrivateEndpointId: string;
```

- *Type:* string

---

##### `vmclusterId`<sup>Required</sup> <a name="vmclusterId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmclusterId"></a>

```typescript
public readonly vmclusterId: string;
```

- *Type:* string

---

##### `vmClusterType`<sup>Required</sup> <a name="vmClusterType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmClusterType"></a>

```typescript
public readonly vmClusterType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiExadataInsightMemberVmClusterDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails">OpsiExadataInsightMemberVmClusterDetails</a>

---


### OpsiExadataInsightTimeoutsOutputReference <a name="OpsiExadataInsightTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.Initializer"></a>

```typescript
import { opsiExadataInsight } from 'rhizo-co-terraform-provider-oci'

new opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts">OpsiExadataInsightTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiExadataInsightTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts">OpsiExadataInsightTimeouts</a>

---



