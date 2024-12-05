# `opsiDatabaseInsight` Submodule <a name="`opsiDatabaseInsight` Submodule" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiDatabaseInsight <a name="OpsiDatabaseInsight" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight oci_opsi_database_insight}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new opsiDatabaseInsight.OpsiDatabaseInsight(scope: Construct, id: string, config: OpsiDatabaseInsightConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig">OpsiDatabaseInsightConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig">OpsiDatabaseInsightConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails">putConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails">putConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails">putCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionCredentialDetails">resetConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionDetails">resetConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectorId">resetConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetCredentialDetails">resetCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseConnectionStatusDetails">resetDatabaseConnectionStatusDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseResourceType">resetDatabaseResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDbmPrivateEndpointId">resetDbmPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerBridgeId">resetEnterpriseManagerBridgeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerEntityIdentifier">resetEnterpriseManagerEntityIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerIdentifier">resetEnterpriseManagerIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetExadataInsightId">resetExadataInsightId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetIsAdvancedFeaturesEnabled">resetIsAdvancedFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetManagementAgentId">resetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOpsiPrivateEndpointId">resetOpsiPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionCredentialDetails` <a name="putConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails"></a>

```typescript
public putConnectionCredentialDetails(value: OpsiDatabaseInsightConnectionCredentialDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

---

##### `putConnectionDetails` <a name="putConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails"></a>

```typescript
public putConnectionDetails(value: OpsiDatabaseInsightConnectionDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

---

##### `putCredentialDetails` <a name="putCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails"></a>

```typescript
public putCredentialDetails(value: OpsiDatabaseInsightCredentialDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts"></a>

```typescript
public putTimeouts(value: OpsiDatabaseInsightTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>

---

##### `resetConnectionCredentialDetails` <a name="resetConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionCredentialDetails"></a>

```typescript
public resetConnectionCredentialDetails(): void
```

##### `resetConnectionDetails` <a name="resetConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionDetails"></a>

```typescript
public resetConnectionDetails(): void
```

##### `resetConnectorId` <a name="resetConnectorId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectorId"></a>

```typescript
public resetConnectorId(): void
```

##### `resetCredentialDetails` <a name="resetCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetCredentialDetails"></a>

```typescript
public resetCredentialDetails(): void
```

##### `resetDatabaseConnectionStatusDetails` <a name="resetDatabaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseConnectionStatusDetails"></a>

```typescript
public resetDatabaseConnectionStatusDetails(): void
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseId"></a>

```typescript
public resetDatabaseId(): void
```

##### `resetDatabaseResourceType` <a name="resetDatabaseResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseResourceType"></a>

```typescript
public resetDatabaseResourceType(): void
```

##### `resetDbmPrivateEndpointId` <a name="resetDbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDbmPrivateEndpointId"></a>

```typescript
public resetDbmPrivateEndpointId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDeploymentType"></a>

```typescript
public resetDeploymentType(): void
```

##### `resetEnterpriseManagerBridgeId` <a name="resetEnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerBridgeId"></a>

```typescript
public resetEnterpriseManagerBridgeId(): void
```

##### `resetEnterpriseManagerEntityIdentifier` <a name="resetEnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerEntityIdentifier"></a>

```typescript
public resetEnterpriseManagerEntityIdentifier(): void
```

##### `resetEnterpriseManagerIdentifier` <a name="resetEnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerIdentifier"></a>

```typescript
public resetEnterpriseManagerIdentifier(): void
```

##### `resetExadataInsightId` <a name="resetExadataInsightId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetExadataInsightId"></a>

```typescript
public resetExadataInsightId(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAdvancedFeaturesEnabled` <a name="resetIsAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetIsAdvancedFeaturesEnabled"></a>

```typescript
public resetIsAdvancedFeaturesEnabled(): void
```

##### `resetManagementAgentId` <a name="resetManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetManagementAgentId"></a>

```typescript
public resetManagementAgentId(): void
```

##### `resetOpsiPrivateEndpointId` <a name="resetOpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOpsiPrivateEndpointId"></a>

```typescript
public resetOpsiPrivateEndpointId(): void
```

##### `resetServiceName` <a name="resetServiceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiDatabaseInsight resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isConstruct"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

opsiDatabaseInsight.OpsiDatabaseInsight.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpsiDatabaseInsight resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsiDatabaseInsight to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsiDatabaseInsight that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsiDatabaseInsight to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetails">connectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference">OpsiDatabaseInsightConnectionCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetails">connectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference">OpsiDatabaseInsightConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetails">credentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference">OpsiDatabaseInsightCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseDisplayName">databaseDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityDisplayName">enterpriseManagerEntityDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityName">enterpriseManagerEntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityType">enterpriseManagerEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.processorCount">processorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.rootId">rootId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference">OpsiDatabaseInsightTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetailsInput">connectionCredentialDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetailsInput">connectionDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorIdInput">connectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetailsInput">credentialDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetailsInput">databaseConnectionStatusDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceTypeInput">databaseResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointIdInput">dbmPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeIdInput">enterpriseManagerBridgeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifierInput">enterpriseManagerEntityIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifierInput">enterpriseManagerIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySourceInput">entitySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightIdInput">exadataInsightIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabledInput">isAdvancedFeaturesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointIdInput">opsiPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetails">databaseConnectionStatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceType">databaseResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointId">dbmPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifier">enterpriseManagerEntityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifier">enterpriseManagerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySource">entitySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightId">exadataInsightId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabled">isAdvancedFeaturesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionCredentialDetails`<sup>Required</sup> <a name="connectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetails"></a>

```typescript
public readonly connectionCredentialDetails: OpsiDatabaseInsightConnectionCredentialDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference">OpsiDatabaseInsightConnectionCredentialDetailsOutputReference</a>

---

##### `connectionDetails`<sup>Required</sup> <a name="connectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetails"></a>

```typescript
public readonly connectionDetails: OpsiDatabaseInsightConnectionDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference">OpsiDatabaseInsightConnectionDetailsOutputReference</a>

---

##### `credentialDetails`<sup>Required</sup> <a name="credentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetails"></a>

```typescript
public readonly credentialDetails: OpsiDatabaseInsightCredentialDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference">OpsiDatabaseInsightCredentialDetailsOutputReference</a>

---

##### `databaseDisplayName`<sup>Required</sup> <a name="databaseDisplayName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseDisplayName"></a>

```typescript
public readonly databaseDisplayName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityDisplayName`<sup>Required</sup> <a name="enterpriseManagerEntityDisplayName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityDisplayName"></a>

```typescript
public readonly enterpriseManagerEntityDisplayName: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityName`<sup>Required</sup> <a name="enterpriseManagerEntityName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityName"></a>

```typescript
public readonly enterpriseManagerEntityName: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityType`<sup>Required</sup> <a name="enterpriseManagerEntityType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityType"></a>

```typescript
public readonly enterpriseManagerEntityType: string;
```

- *Type:* string

---

##### `isHeatWaveClusterAttached`<sup>Required</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHeatWaveClusterAttached"></a>

```typescript
public readonly isHeatWaveClusterAttached: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHighlyAvailable`<sup>Required</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHighlyAvailable"></a>

```typescript
public readonly isHighlyAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `processorCount`<sup>Required</sup> <a name="processorCount" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.processorCount"></a>

```typescript
public readonly processorCount: number;
```

- *Type:* number

---

##### `rootId`<sup>Required</sup> <a name="rootId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.rootId"></a>

```typescript
public readonly rootId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeouts"></a>

```typescript
public readonly timeouts: OpsiDatabaseInsightTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference">OpsiDatabaseInsightTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `connectionCredentialDetailsInput`<sup>Optional</sup> <a name="connectionCredentialDetailsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetailsInput"></a>

```typescript
public readonly connectionCredentialDetailsInput: OpsiDatabaseInsightConnectionCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

---

##### `connectionDetailsInput`<sup>Optional</sup> <a name="connectionDetailsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetailsInput"></a>

```typescript
public readonly connectionDetailsInput: OpsiDatabaseInsightConnectionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorIdInput"></a>

```typescript
public readonly connectorIdInput: string;
```

- *Type:* string

---

##### `credentialDetailsInput`<sup>Optional</sup> <a name="credentialDetailsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetailsInput"></a>

```typescript
public readonly credentialDetailsInput: OpsiDatabaseInsightCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

---

##### `databaseConnectionStatusDetailsInput`<sup>Optional</sup> <a name="databaseConnectionStatusDetailsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetailsInput"></a>

```typescript
public readonly databaseConnectionStatusDetailsInput: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `databaseResourceTypeInput`<sup>Optional</sup> <a name="databaseResourceTypeInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceTypeInput"></a>

```typescript
public readonly databaseResourceTypeInput: string;
```

- *Type:* string

---

##### `dbmPrivateEndpointIdInput`<sup>Optional</sup> <a name="dbmPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointIdInput"></a>

```typescript
public readonly dbmPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `enterpriseManagerBridgeIdInput`<sup>Optional</sup> <a name="enterpriseManagerBridgeIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeIdInput"></a>

```typescript
public readonly enterpriseManagerBridgeIdInput: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityIdentifierInput`<sup>Optional</sup> <a name="enterpriseManagerEntityIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifierInput"></a>

```typescript
public readonly enterpriseManagerEntityIdentifierInput: string;
```

- *Type:* string

---

##### `enterpriseManagerIdentifierInput`<sup>Optional</sup> <a name="enterpriseManagerIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifierInput"></a>

```typescript
public readonly enterpriseManagerIdentifierInput: string;
```

- *Type:* string

---

##### `entitySourceInput`<sup>Optional</sup> <a name="entitySourceInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySourceInput"></a>

```typescript
public readonly entitySourceInput: string;
```

- *Type:* string

---

##### `exadataInsightIdInput`<sup>Optional</sup> <a name="exadataInsightIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightIdInput"></a>

```typescript
public readonly exadataInsightIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAdvancedFeaturesEnabledInput`<sup>Optional</sup> <a name="isAdvancedFeaturesEnabledInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabledInput"></a>

```typescript
public readonly isAdvancedFeaturesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentIdInput"></a>

```typescript
public readonly managementAgentIdInput: string;
```

- *Type:* string

---

##### `opsiPrivateEndpointIdInput`<sup>Optional</sup> <a name="opsiPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointIdInput"></a>

```typescript
public readonly opsiPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpsiDatabaseInsightTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `databaseConnectionStatusDetails`<sup>Required</sup> <a name="databaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetails"></a>

```typescript
public readonly databaseConnectionStatusDetails: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseResourceType`<sup>Required</sup> <a name="databaseResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceType"></a>

```typescript
public readonly databaseResourceType: string;
```

- *Type:* string

---

##### `dbmPrivateEndpointId`<sup>Required</sup> <a name="dbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointId"></a>

```typescript
public readonly dbmPrivateEndpointId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `enterpriseManagerBridgeId`<sup>Required</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeId"></a>

```typescript
public readonly enterpriseManagerBridgeId: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityIdentifier`<sup>Required</sup> <a name="enterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifier"></a>

```typescript
public readonly enterpriseManagerEntityIdentifier: string;
```

- *Type:* string

---

##### `enterpriseManagerIdentifier`<sup>Required</sup> <a name="enterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifier"></a>

```typescript
public readonly enterpriseManagerIdentifier: string;
```

- *Type:* string

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySource"></a>

```typescript
public readonly entitySource: string;
```

- *Type:* string

---

##### `exadataInsightId`<sup>Required</sup> <a name="exadataInsightId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightId"></a>

```typescript
public readonly exadataInsightId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAdvancedFeaturesEnabled`<sup>Required</sup> <a name="isAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabled"></a>

```typescript
public readonly isAdvancedFeaturesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `opsiPrivateEndpointId`<sup>Required</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointId"></a>

```typescript
public readonly opsiPrivateEndpointId: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiDatabaseInsightConfig <a name="OpsiDatabaseInsightConfig" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

const opsiDatabaseInsightConfig: opsiDatabaseInsight.OpsiDatabaseInsightConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.entitySource">entitySource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionCredentialDetails">connectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | connection_credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionDetails">connectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | connection_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectorId">connectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connector_id OpsiDatabaseInsight#connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.credentialDetails">credentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseConnectionStatusDetails">databaseConnectionStatusDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseId">databaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseResourceType">databaseResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dbmPrivateEndpointId">dbmPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.deploymentType">deploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerEntityIdentifier">enterpriseManagerEntityIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerIdentifier">enterpriseManagerIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.exadataInsightId">exadataInsightId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.isAdvancedFeaturesEnabled">isAdvancedFeaturesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#is_advanced_features_enabled OpsiDatabaseInsight#is_advanced_features_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#management_agent_id OpsiDatabaseInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#status OpsiDatabaseInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}.

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.entitySource"></a>

```typescript
public readonly entitySource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}.

---

##### `connectionCredentialDetails`<sup>Optional</sup> <a name="connectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionCredentialDetails"></a>

```typescript
public readonly connectionCredentialDetails: OpsiDatabaseInsightConnectionCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

connection_credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connection_credential_details OpsiDatabaseInsight#connection_credential_details}

---

##### `connectionDetails`<sup>Optional</sup> <a name="connectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionDetails"></a>

```typescript
public readonly connectionDetails: OpsiDatabaseInsightConnectionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

connection_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connection_details OpsiDatabaseInsight#connection_details}

---

##### `connectorId`<sup>Optional</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connector_id OpsiDatabaseInsight#connector_id}.

---

##### `credentialDetails`<sup>Optional</sup> <a name="credentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.credentialDetails"></a>

```typescript
public readonly credentialDetails: OpsiDatabaseInsightCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_details OpsiDatabaseInsight#credential_details}

---

##### `databaseConnectionStatusDetails`<sup>Optional</sup> <a name="databaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseConnectionStatusDetails"></a>

```typescript
public readonly databaseConnectionStatusDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}.

---

##### `databaseResourceType`<sup>Optional</sup> <a name="databaseResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseResourceType"></a>

```typescript
public readonly databaseResourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}.

---

##### `dbmPrivateEndpointId`<sup>Optional</sup> <a name="dbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dbmPrivateEndpointId"></a>

```typescript
public readonly dbmPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}.

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}.

---

##### `enterpriseManagerBridgeId`<sup>Optional</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerBridgeId"></a>

```typescript
public readonly enterpriseManagerBridgeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}.

---

##### `enterpriseManagerEntityIdentifier`<sup>Optional</sup> <a name="enterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerEntityIdentifier"></a>

```typescript
public readonly enterpriseManagerEntityIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}.

---

##### `enterpriseManagerIdentifier`<sup>Optional</sup> <a name="enterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerIdentifier"></a>

```typescript
public readonly enterpriseManagerIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}.

---

##### `exadataInsightId`<sup>Optional</sup> <a name="exadataInsightId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.exadataInsightId"></a>

```typescript
public readonly exadataInsightId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAdvancedFeaturesEnabled`<sup>Optional</sup> <a name="isAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.isAdvancedFeaturesEnabled"></a>

```typescript
public readonly isAdvancedFeaturesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#is_advanced_features_enabled OpsiDatabaseInsight#is_advanced_features_enabled}.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#management_agent_id OpsiDatabaseInsight#management_agent_id}.

---

##### `opsiPrivateEndpointId`<sup>Optional</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.opsiPrivateEndpointId"></a>

```typescript
public readonly opsiPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#status OpsiDatabaseInsight#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpsiDatabaseInsightTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#timeouts OpsiDatabaseInsight#timeouts}

---

### OpsiDatabaseInsightConnectionCredentialDetails <a name="OpsiDatabaseInsightConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

const opsiDatabaseInsightConnectionCredentialDetails: opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialType">credentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialSourceName">credentialSourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}.

---

##### `credentialSourceName`<sup>Optional</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialSourceName"></a>

```typescript
public readonly credentialSourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}.

---

### OpsiDatabaseInsightConnectionDetails <a name="OpsiDatabaseInsightConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

const opsiDatabaseInsightConnectionDetails: opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_name OpsiDatabaseInsight#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hosts">hosts</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>[]</code> | hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#protocol OpsiDatabaseInsight#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}. |

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_name OpsiDatabaseInsight#host_name}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hosts"></a>

```typescript
public readonly hosts: IResolvable | OpsiDatabaseInsightConnectionDetailsHosts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>[]

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#hosts OpsiDatabaseInsight#hosts}

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#protocol OpsiDatabaseInsight#protocol}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}.

---

### OpsiDatabaseInsightConnectionDetailsHosts <a name="OpsiDatabaseInsightConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

const opsiDatabaseInsightConnectionDetailsHosts: opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.hostIp">hostIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_ip OpsiDatabaseInsight#host_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}. |

---

##### `hostIp`<sup>Optional</sup> <a name="hostIp" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.hostIp"></a>

```typescript
public readonly hostIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_ip OpsiDatabaseInsight#host_ip}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}.

---

### OpsiDatabaseInsightCredentialDetails <a name="OpsiDatabaseInsightCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

const opsiDatabaseInsightCredentialDetails: opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialType">credentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialSourceName">credentialSourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.walletSecretId">walletSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#wallet_secret_id OpsiDatabaseInsight#wallet_secret_id}. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}.

---

##### `credentialSourceName`<sup>Optional</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialSourceName"></a>

```typescript
public readonly credentialSourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}.

---

##### `walletSecretId`<sup>Optional</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.walletSecretId"></a>

```typescript
public readonly walletSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#wallet_secret_id OpsiDatabaseInsight#wallet_secret_id}.

---

### OpsiDatabaseInsightTimeouts <a name="OpsiDatabaseInsightTimeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

const opsiDatabaseInsightTimeouts: opsiDatabaseInsight.OpsiDatabaseInsightTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#create OpsiDatabaseInsight#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#delete OpsiDatabaseInsight#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#update OpsiDatabaseInsight#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#create OpsiDatabaseInsight#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#delete OpsiDatabaseInsight#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#update OpsiDatabaseInsight#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiDatabaseInsightConnectionCredentialDetailsOutputReference <a name="OpsiDatabaseInsightConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetCredentialSourceName">resetCredentialSourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialSourceName` <a name="resetCredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetCredentialSourceName"></a>

```typescript
public resetCredentialSourceName(): void
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetPasswordSecretId"></a>

```typescript
public resetPasswordSecretId(): void
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceNameInput">credentialSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceName">credentialSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialSourceNameInput`<sup>Optional</sup> <a name="credentialSourceNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceNameInput"></a>

```typescript
public readonly credentialSourceNameInput: string;
```

- *Type:* string

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```typescript
public readonly passwordSecretIdInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `credentialSourceName`<sup>Required</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```typescript
public readonly credentialSourceName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsiDatabaseInsightConnectionCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

---


### OpsiDatabaseInsightConnectionDetailsHostsList <a name="OpsiDatabaseInsightConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.get"></a>

```typescript
public get(index: number): OpsiDatabaseInsightConnectionDetailsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiDatabaseInsightConnectionDetailsHosts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>[]

---


### OpsiDatabaseInsightConnectionDetailsHostsOutputReference <a name="OpsiDatabaseInsightConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetHostIp">resetHostIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostIp` <a name="resetHostIp" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetHostIp"></a>

```typescript
public resetHostIp(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIpInput">hostIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIp">hostIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostIpInput`<sup>Optional</sup> <a name="hostIpInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIpInput"></a>

```typescript
public readonly hostIpInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `hostIp`<sup>Required</sup> <a name="hostIp" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIp"></a>

```typescript
public readonly hostIp: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiDatabaseInsightConnectionDetailsHosts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>

---


### OpsiDatabaseInsightConnectionDetailsOutputReference <a name="OpsiDatabaseInsightConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.putHosts">putHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHosts` <a name="putHosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.putHosts"></a>

```typescript
public putHosts(value: IResolvable | OpsiDatabaseInsightConnectionDetailsHosts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.putHosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>[]

---

##### `resetHostName` <a name="resetHostName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetHosts` <a name="resetHosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHosts"></a>

```typescript
public resetHosts(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetServiceName` <a name="resetServiceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hosts">hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList">OpsiDatabaseInsightConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostsInput">hostsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hosts"></a>

```typescript
public readonly hosts: OpsiDatabaseInsightConnectionDetailsHostsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList">OpsiDatabaseInsightConnectionDetailsHostsList</a>

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostsInput"></a>

```typescript
public readonly hostsInput: IResolvable | OpsiDatabaseInsightConnectionDetailsHosts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts">OpsiDatabaseInsightConnectionDetailsHosts</a>[]

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsiDatabaseInsightConnectionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

---


### OpsiDatabaseInsightCredentialDetailsOutputReference <a name="OpsiDatabaseInsightCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetCredentialSourceName">resetCredentialSourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetWalletSecretId">resetWalletSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialSourceName` <a name="resetCredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetCredentialSourceName"></a>

```typescript
public resetCredentialSourceName(): void
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetPasswordSecretId"></a>

```typescript
public resetPasswordSecretId(): void
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```

##### `resetWalletSecretId` <a name="resetWalletSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetWalletSecretId"></a>

```typescript
public resetWalletSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceNameInput">credentialSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretIdInput">walletSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceName">credentialSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretId">walletSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialSourceNameInput`<sup>Optional</sup> <a name="credentialSourceNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceNameInput"></a>

```typescript
public readonly credentialSourceNameInput: string;
```

- *Type:* string

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```typescript
public readonly passwordSecretIdInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `walletSecretIdInput`<sup>Optional</sup> <a name="walletSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretIdInput"></a>

```typescript
public readonly walletSecretIdInput: string;
```

- *Type:* string

---

##### `credentialSourceName`<sup>Required</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceName"></a>

```typescript
public readonly credentialSourceName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `walletSecretId`<sup>Required</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretId"></a>

```typescript
public readonly walletSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsiDatabaseInsightCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

---


### OpsiDatabaseInsightTimeoutsOutputReference <a name="OpsiDatabaseInsightTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer"></a>

```typescript
import { opsiDatabaseInsight } from 'rhizo-co-terraform-provider-oci'

new opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiDatabaseInsightTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>

---



