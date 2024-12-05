# `integrationIntegrationInstance` Submodule <a name="`integrationIntegrationInstance` Submodule" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationIntegrationInstance <a name="IntegrationIntegrationInstance" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance oci_integration_integration_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstance(scope: Construct, id: string, config: IntegrationIntegrationInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig">IntegrationIntegrationInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig">IntegrationIntegrationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putAlternateCustomEndpoints">putAlternateCustomEndpoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putCustomEndpoint">putCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putNetworkEndpointDetails">putNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetAlternateCustomEndpoints">resetAlternateCustomEndpoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetConsumptionModel">resetConsumptionModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetCustomEndpoint">resetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetEnableProcessAutomationTrigger">resetEnableProcessAutomationTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetExtendDataRetentionTrigger">resetExtendDataRetentionTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetFailoverTrigger">resetFailoverTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIdcsAt">resetIdcsAt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsDisasterRecoveryEnabled">resetIsDisasterRecoveryEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsFileServerEnabled">resetIsFileServerEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsVisualBuilderEnabled">resetIsVisualBuilderEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetNetworkEndpointDetails">resetNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetShape">resetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlternateCustomEndpoints` <a name="putAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putAlternateCustomEndpoints"></a>

```typescript
public putAlternateCustomEndpoints(value: IResolvable | IntegrationIntegrationInstanceAlternateCustomEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putAlternateCustomEndpoints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>[]

---

##### `putCustomEndpoint` <a name="putCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putCustomEndpoint"></a>

```typescript
public putCustomEndpoint(value: IntegrationIntegrationInstanceCustomEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putCustomEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

---

##### `putNetworkEndpointDetails` <a name="putNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putNetworkEndpointDetails"></a>

```typescript
public putNetworkEndpointDetails(value: IntegrationIntegrationInstanceNetworkEndpointDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putNetworkEndpointDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: IntegrationIntegrationInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a>

---

##### `resetAlternateCustomEndpoints` <a name="resetAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetAlternateCustomEndpoints"></a>

```typescript
public resetAlternateCustomEndpoints(): void
```

##### `resetConsumptionModel` <a name="resetConsumptionModel" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetConsumptionModel"></a>

```typescript
public resetConsumptionModel(): void
```

##### `resetCustomEndpoint` <a name="resetCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetCustomEndpoint"></a>

```typescript
public resetCustomEndpoint(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDomainId` <a name="resetDomainId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetEnableProcessAutomationTrigger` <a name="resetEnableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetEnableProcessAutomationTrigger"></a>

```typescript
public resetEnableProcessAutomationTrigger(): void
```

##### `resetExtendDataRetentionTrigger` <a name="resetExtendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetExtendDataRetentionTrigger"></a>

```typescript
public resetExtendDataRetentionTrigger(): void
```

##### `resetFailoverTrigger` <a name="resetFailoverTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetFailoverTrigger"></a>

```typescript
public resetFailoverTrigger(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdcsAt` <a name="resetIdcsAt" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIdcsAt"></a>

```typescript
public resetIdcsAt(): void
```

##### `resetIsDisasterRecoveryEnabled` <a name="resetIsDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsDisasterRecoveryEnabled"></a>

```typescript
public resetIsDisasterRecoveryEnabled(): void
```

##### `resetIsFileServerEnabled` <a name="resetIsFileServerEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsFileServerEnabled"></a>

```typescript
public resetIsFileServerEnabled(): void
```

##### `resetIsVisualBuilderEnabled` <a name="resetIsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsVisualBuilderEnabled"></a>

```typescript
public resetIsVisualBuilderEnabled(): void
```

##### `resetNetworkEndpointDetails` <a name="resetNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetNetworkEndpointDetails"></a>

```typescript
public resetNetworkEndpointDetails(): void
```

##### `resetShape` <a name="resetShape" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetShape"></a>

```typescript
public resetShape(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationIntegrationInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isConstruct"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

integrationIntegrationInstance.IntegrationIntegrationInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformElement"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformResource"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationIntegrationInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationIntegrationInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationIntegrationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationIntegrationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.alternateCustomEndpoints">alternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList">IntegrationIntegrationInstanceAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.attachments">attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList">IntegrationIntegrationInstanceAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.customEndpoint">customEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference">IntegrationIntegrationInstanceCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.dataRetentionPeriod">dataRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.disasterRecoveryDetails">disasterRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList">IntegrationIntegrationInstanceDisasterRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsInfo">idcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList">IntegrationIntegrationInstanceIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.instanceDesignTimeUrl">instanceDesignTimeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.networkEndpointDetails">networkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference">IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.privateEndpointOutboundConnection">privateEndpointOutboundConnection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList">IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference">IntegrationIntegrationInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.alternateCustomEndpointsInput">alternateCustomEndpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.consumptionModelInput">consumptionModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.customEndpointInput">customEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.enableProcessAutomationTriggerInput">enableProcessAutomationTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.extendDataRetentionTriggerInput">extendDataRetentionTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.failoverTriggerInput">failoverTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsAtInput">idcsAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.integrationInstanceTypeInput">integrationInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isByolInput">isByolInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isDisasterRecoveryEnabledInput">isDisasterRecoveryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isFileServerEnabledInput">isFileServerEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isVisualBuilderEnabledInput">isVisualBuilderEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.messagePacksInput">messagePacksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.networkEndpointDetailsInput">networkEndpointDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.consumptionModel">consumptionModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.enableProcessAutomationTrigger">enableProcessAutomationTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.extendDataRetentionTrigger">extendDataRetentionTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.failoverTrigger">failoverTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsAt">idcsAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.integrationInstanceType">integrationInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isByol">isByol</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isDisasterRecoveryEnabled">isDisasterRecoveryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isFileServerEnabled">isFileServerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isVisualBuilderEnabled">isVisualBuilderEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.messagePacks">messagePacks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alternateCustomEndpoints`<sup>Required</sup> <a name="alternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.alternateCustomEndpoints"></a>

```typescript
public readonly alternateCustomEndpoints: IntegrationIntegrationInstanceAlternateCustomEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList">IntegrationIntegrationInstanceAlternateCustomEndpointsList</a>

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.attachments"></a>

```typescript
public readonly attachments: IntegrationIntegrationInstanceAttachmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList">IntegrationIntegrationInstanceAttachmentsList</a>

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.customEndpoint"></a>

```typescript
public readonly customEndpoint: IntegrationIntegrationInstanceCustomEndpointOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference">IntegrationIntegrationInstanceCustomEndpointOutputReference</a>

---

##### `dataRetentionPeriod`<sup>Required</sup> <a name="dataRetentionPeriod" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.dataRetentionPeriod"></a>

```typescript
public readonly dataRetentionPeriod: string;
```

- *Type:* string

---

##### `disasterRecoveryDetails`<sup>Required</sup> <a name="disasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.disasterRecoveryDetails"></a>

```typescript
public readonly disasterRecoveryDetails: IntegrationIntegrationInstanceDisasterRecoveryDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList">IntegrationIntegrationInstanceDisasterRecoveryDetailsList</a>

---

##### `idcsInfo`<sup>Required</sup> <a name="idcsInfo" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsInfo"></a>

```typescript
public readonly idcsInfo: IntegrationIntegrationInstanceIdcsInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList">IntegrationIntegrationInstanceIdcsInfoList</a>

---

##### `instanceDesignTimeUrl`<sup>Required</sup> <a name="instanceDesignTimeUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.instanceDesignTimeUrl"></a>

```typescript
public readonly instanceDesignTimeUrl: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `networkEndpointDetails`<sup>Required</sup> <a name="networkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.networkEndpointDetails"></a>

```typescript
public readonly networkEndpointDetails: IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference">IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference</a>

---

##### `privateEndpointOutboundConnection`<sup>Required</sup> <a name="privateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.privateEndpointOutboundConnection"></a>

```typescript
public readonly privateEndpointOutboundConnection: IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList">IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList</a>

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeouts"></a>

```typescript
public readonly timeouts: IntegrationIntegrationInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference">IntegrationIntegrationInstanceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `alternateCustomEndpointsInput`<sup>Optional</sup> <a name="alternateCustomEndpointsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.alternateCustomEndpointsInput"></a>

```typescript
public readonly alternateCustomEndpointsInput: IResolvable | IntegrationIntegrationInstanceAlternateCustomEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `consumptionModelInput`<sup>Optional</sup> <a name="consumptionModelInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.consumptionModelInput"></a>

```typescript
public readonly consumptionModelInput: string;
```

- *Type:* string

---

##### `customEndpointInput`<sup>Optional</sup> <a name="customEndpointInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.customEndpointInput"></a>

```typescript
public readonly customEndpointInput: IntegrationIntegrationInstanceCustomEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `enableProcessAutomationTriggerInput`<sup>Optional</sup> <a name="enableProcessAutomationTriggerInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.enableProcessAutomationTriggerInput"></a>

```typescript
public readonly enableProcessAutomationTriggerInput: number;
```

- *Type:* number

---

##### `extendDataRetentionTriggerInput`<sup>Optional</sup> <a name="extendDataRetentionTriggerInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.extendDataRetentionTriggerInput"></a>

```typescript
public readonly extendDataRetentionTriggerInput: number;
```

- *Type:* number

---

##### `failoverTriggerInput`<sup>Optional</sup> <a name="failoverTriggerInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.failoverTriggerInput"></a>

```typescript
public readonly failoverTriggerInput: number;
```

- *Type:* number

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idcsAtInput`<sup>Optional</sup> <a name="idcsAtInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsAtInput"></a>

```typescript
public readonly idcsAtInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationInstanceTypeInput`<sup>Optional</sup> <a name="integrationInstanceTypeInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.integrationInstanceTypeInput"></a>

```typescript
public readonly integrationInstanceTypeInput: string;
```

- *Type:* string

---

##### `isByolInput`<sup>Optional</sup> <a name="isByolInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isByolInput"></a>

```typescript
public readonly isByolInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDisasterRecoveryEnabledInput`<sup>Optional</sup> <a name="isDisasterRecoveryEnabledInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isDisasterRecoveryEnabledInput"></a>

```typescript
public readonly isDisasterRecoveryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isFileServerEnabledInput`<sup>Optional</sup> <a name="isFileServerEnabledInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isFileServerEnabledInput"></a>

```typescript
public readonly isFileServerEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isVisualBuilderEnabledInput`<sup>Optional</sup> <a name="isVisualBuilderEnabledInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isVisualBuilderEnabledInput"></a>

```typescript
public readonly isVisualBuilderEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messagePacksInput`<sup>Optional</sup> <a name="messagePacksInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.messagePacksInput"></a>

```typescript
public readonly messagePacksInput: number;
```

- *Type:* number

---

##### `networkEndpointDetailsInput`<sup>Optional</sup> <a name="networkEndpointDetailsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.networkEndpointDetailsInput"></a>

```typescript
public readonly networkEndpointDetailsInput: IntegrationIntegrationInstanceNetworkEndpointDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IntegrationIntegrationInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `consumptionModel`<sup>Required</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.consumptionModel"></a>

```typescript
public readonly consumptionModel: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `enableProcessAutomationTrigger`<sup>Required</sup> <a name="enableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.enableProcessAutomationTrigger"></a>

```typescript
public readonly enableProcessAutomationTrigger: number;
```

- *Type:* number

---

##### `extendDataRetentionTrigger`<sup>Required</sup> <a name="extendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.extendDataRetentionTrigger"></a>

```typescript
public readonly extendDataRetentionTrigger: number;
```

- *Type:* number

---

##### `failoverTrigger`<sup>Required</sup> <a name="failoverTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.failoverTrigger"></a>

```typescript
public readonly failoverTrigger: number;
```

- *Type:* number

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsAt`<sup>Required</sup> <a name="idcsAt" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsAt"></a>

```typescript
public readonly idcsAt: string;
```

- *Type:* string

---

##### `integrationInstanceType`<sup>Required</sup> <a name="integrationInstanceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.integrationInstanceType"></a>

```typescript
public readonly integrationInstanceType: string;
```

- *Type:* string

---

##### `isByol`<sup>Required</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isByol"></a>

```typescript
public readonly isByol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDisasterRecoveryEnabled`<sup>Required</sup> <a name="isDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isDisasterRecoveryEnabled"></a>

```typescript
public readonly isDisasterRecoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isFileServerEnabled`<sup>Required</sup> <a name="isFileServerEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isFileServerEnabled"></a>

```typescript
public readonly isFileServerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isVisualBuilderEnabled`<sup>Required</sup> <a name="isVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isVisualBuilderEnabled"></a>

```typescript
public readonly isVisualBuilderEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messagePacks`<sup>Required</sup> <a name="messagePacks" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.messagePacks"></a>

```typescript
public readonly messagePacks: number;
```

- *Type:* number

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationIntegrationInstanceAlternateCustomEndpoints <a name="IntegrationIntegrationInstanceAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

const integrationIntegrationInstanceAlternateCustomEndpoints: integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.property.certificateSecretId">certificateSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}.

---

##### `certificateSecretId`<sup>Optional</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.property.certificateSecretId"></a>

```typescript
public readonly certificateSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}.

---

### IntegrationIntegrationInstanceAttachments <a name="IntegrationIntegrationInstanceAttachments" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

const integrationIntegrationInstanceAttachments: integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments = { ... }
```


### IntegrationIntegrationInstanceConfig <a name="IntegrationIntegrationInstanceConfig" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

const integrationIntegrationInstanceConfig: integrationIntegrationInstance.IntegrationIntegrationInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#compartment_id IntegrationIntegrationInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#display_name IntegrationIntegrationInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.integrationInstanceType">integrationInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#integration_instance_type IntegrationIntegrationInstance#integration_instance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isByol">isByol</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_byol IntegrationIntegrationInstance#is_byol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.messagePacks">messagePacks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#message_packs IntegrationIntegrationInstance#message_packs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.alternateCustomEndpoints">alternateCustomEndpoints</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>[]</code> | alternate_custom_endpoints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.consumptionModel">consumptionModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#consumption_model IntegrationIntegrationInstance#consumption_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.customEndpoint">customEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#defined_tags IntegrationIntegrationInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#domain_id IntegrationIntegrationInstance#domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.enableProcessAutomationTrigger">enableProcessAutomationTrigger</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#enable_process_automation_trigger IntegrationIntegrationInstance#enable_process_automation_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.extendDataRetentionTrigger">extendDataRetentionTrigger</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#extend_data_retention_trigger IntegrationIntegrationInstance#extend_data_retention_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.failoverTrigger">failoverTrigger</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#failover_trigger IntegrationIntegrationInstance#failover_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#freeform_tags IntegrationIntegrationInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.idcsAt">idcsAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#idcs_at IntegrationIntegrationInstance#idcs_at}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isDisasterRecoveryEnabled">isDisasterRecoveryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_disaster_recovery_enabled IntegrationIntegrationInstance#is_disaster_recovery_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isFileServerEnabled">isFileServerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_file_server_enabled IntegrationIntegrationInstance#is_file_server_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isVisualBuilderEnabled">isVisualBuilderEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_visual_builder_enabled IntegrationIntegrationInstance#is_visual_builder_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.networkEndpointDetails">networkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a></code> | network_endpoint_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.shape">shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#shape IntegrationIntegrationInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#state IntegrationIntegrationInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#compartment_id IntegrationIntegrationInstance#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#display_name IntegrationIntegrationInstance#display_name}.

---

##### `integrationInstanceType`<sup>Required</sup> <a name="integrationInstanceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.integrationInstanceType"></a>

```typescript
public readonly integrationInstanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#integration_instance_type IntegrationIntegrationInstance#integration_instance_type}.

---

##### `isByol`<sup>Required</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isByol"></a>

```typescript
public readonly isByol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_byol IntegrationIntegrationInstance#is_byol}.

---

##### `messagePacks`<sup>Required</sup> <a name="messagePacks" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.messagePacks"></a>

```typescript
public readonly messagePacks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#message_packs IntegrationIntegrationInstance#message_packs}.

---

##### `alternateCustomEndpoints`<sup>Optional</sup> <a name="alternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.alternateCustomEndpoints"></a>

```typescript
public readonly alternateCustomEndpoints: IResolvable | IntegrationIntegrationInstanceAlternateCustomEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>[]

alternate_custom_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#alternate_custom_endpoints IntegrationIntegrationInstance#alternate_custom_endpoints}

---

##### `consumptionModel`<sup>Optional</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.consumptionModel"></a>

```typescript
public readonly consumptionModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#consumption_model IntegrationIntegrationInstance#consumption_model}.

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.customEndpoint"></a>

```typescript
public readonly customEndpoint: IntegrationIntegrationInstanceCustomEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#custom_endpoint IntegrationIntegrationInstance#custom_endpoint}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#defined_tags IntegrationIntegrationInstance#defined_tags}.

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#domain_id IntegrationIntegrationInstance#domain_id}.

---

##### `enableProcessAutomationTrigger`<sup>Optional</sup> <a name="enableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.enableProcessAutomationTrigger"></a>

```typescript
public readonly enableProcessAutomationTrigger: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#enable_process_automation_trigger IntegrationIntegrationInstance#enable_process_automation_trigger}.

---

##### `extendDataRetentionTrigger`<sup>Optional</sup> <a name="extendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.extendDataRetentionTrigger"></a>

```typescript
public readonly extendDataRetentionTrigger: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#extend_data_retention_trigger IntegrationIntegrationInstance#extend_data_retention_trigger}.

---

##### `failoverTrigger`<sup>Optional</sup> <a name="failoverTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.failoverTrigger"></a>

```typescript
public readonly failoverTrigger: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#failover_trigger IntegrationIntegrationInstance#failover_trigger}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#freeform_tags IntegrationIntegrationInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idcsAt`<sup>Optional</sup> <a name="idcsAt" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.idcsAt"></a>

```typescript
public readonly idcsAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#idcs_at IntegrationIntegrationInstance#idcs_at}.

---

##### `isDisasterRecoveryEnabled`<sup>Optional</sup> <a name="isDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isDisasterRecoveryEnabled"></a>

```typescript
public readonly isDisasterRecoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_disaster_recovery_enabled IntegrationIntegrationInstance#is_disaster_recovery_enabled}.

---

##### `isFileServerEnabled`<sup>Optional</sup> <a name="isFileServerEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isFileServerEnabled"></a>

```typescript
public readonly isFileServerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_file_server_enabled IntegrationIntegrationInstance#is_file_server_enabled}.

---

##### `isVisualBuilderEnabled`<sup>Optional</sup> <a name="isVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isVisualBuilderEnabled"></a>

```typescript
public readonly isVisualBuilderEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_visual_builder_enabled IntegrationIntegrationInstance#is_visual_builder_enabled}.

---

##### `networkEndpointDetails`<sup>Optional</sup> <a name="networkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.networkEndpointDetails"></a>

```typescript
public readonly networkEndpointDetails: IntegrationIntegrationInstanceNetworkEndpointDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

network_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#network_endpoint_details IntegrationIntegrationInstance#network_endpoint_details}

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#shape IntegrationIntegrationInstance#shape}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#state IntegrationIntegrationInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IntegrationIntegrationInstanceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#timeouts IntegrationIntegrationInstance#timeouts}

---

### IntegrationIntegrationInstanceCustomEndpoint <a name="IntegrationIntegrationInstanceCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

const integrationIntegrationInstanceCustomEndpoint: integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.dnsZoneName">dnsZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#dns_zone_name IntegrationIntegrationInstance#dns_zone_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.certificateSecretId">certificateSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.dnsType">dnsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#dns_type IntegrationIntegrationInstance#dns_type}. |

---

##### `dnsZoneName`<sup>Required</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.dnsZoneName"></a>

```typescript
public readonly dnsZoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#dns_zone_name IntegrationIntegrationInstance#dns_zone_name}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}.

---

##### `certificateSecretId`<sup>Optional</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.certificateSecretId"></a>

```typescript
public readonly certificateSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}.

---

##### `dnsType`<sup>Optional</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.dnsType"></a>

```typescript
public readonly dnsType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#dns_type IntegrationIntegrationInstance#dns_type}.

---

### IntegrationIntegrationInstanceDisasterRecoveryDetails <a name="IntegrationIntegrationInstanceDisasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

const integrationIntegrationInstanceDisasterRecoveryDetails: integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails = { ... }
```


### IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

const integrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails: integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails = { ... }
```


### IntegrationIntegrationInstanceIdcsInfo <a name="IntegrationIntegrationInstanceIdcsInfo" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

const integrationIntegrationInstanceIdcsInfo: integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo = { ... }
```


### IntegrationIntegrationInstanceNetworkEndpointDetails <a name="IntegrationIntegrationInstanceNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

const integrationIntegrationInstanceNetworkEndpointDetails: integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#network_endpoint_type IntegrationIntegrationInstance#network_endpoint_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.allowlistedHttpIps">allowlistedHttpIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_http_ips IntegrationIntegrationInstance#allowlisted_http_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.allowlistedHttpVcns">allowlistedHttpVcns</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>[]</code> | allowlisted_http_vcns block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.isIntegrationVcnAllowlisted">isIntegrationVcnAllowlisted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_integration_vcn_allowlisted IntegrationIntegrationInstance#is_integration_vcn_allowlisted}. |

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#network_endpoint_type IntegrationIntegrationInstance#network_endpoint_type}.

---

##### `allowlistedHttpIps`<sup>Optional</sup> <a name="allowlistedHttpIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.allowlistedHttpIps"></a>

```typescript
public readonly allowlistedHttpIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_http_ips IntegrationIntegrationInstance#allowlisted_http_ips}.

---

##### `allowlistedHttpVcns`<sup>Optional</sup> <a name="allowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.allowlistedHttpVcns"></a>

```typescript
public readonly allowlistedHttpVcns: IResolvable | IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>[]

allowlisted_http_vcns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_http_vcns IntegrationIntegrationInstance#allowlisted_http_vcns}

---

##### `isIntegrationVcnAllowlisted`<sup>Optional</sup> <a name="isIntegrationVcnAllowlisted" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.isIntegrationVcnAllowlisted"></a>

```typescript
public readonly isIntegrationVcnAllowlisted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_integration_vcn_allowlisted IntegrationIntegrationInstance#is_integration_vcn_allowlisted}.

---

### IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns <a name="IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

const integrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns: integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.property.allowlistedIps">allowlistedIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_ips IntegrationIntegrationInstance#allowlisted_ips}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `allowlistedIps`<sup>Optional</sup> <a name="allowlistedIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.property.allowlistedIps"></a>

```typescript
public readonly allowlistedIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_ips IntegrationIntegrationInstance#allowlisted_ips}.

---

### IntegrationIntegrationInstancePrivateEndpointOutboundConnection <a name="IntegrationIntegrationInstancePrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

const integrationIntegrationInstancePrivateEndpointOutboundConnection: integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection = { ... }
```


### IntegrationIntegrationInstanceTimeouts <a name="IntegrationIntegrationInstanceTimeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

const integrationIntegrationInstanceTimeouts: integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#create IntegrationIntegrationInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#delete IntegrationIntegrationInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#update IntegrationIntegrationInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#create IntegrationIntegrationInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#delete IntegrationIntegrationInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#update IntegrationIntegrationInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationIntegrationInstanceAlternateCustomEndpointsList <a name="IntegrationIntegrationInstanceAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.get"></a>

```typescript
public get(index: number): IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationIntegrationInstanceAlternateCustomEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>[]

---


### IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference <a name="IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resetCertificateSecretId">resetCertificateSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateSecretId` <a name="resetCertificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resetCertificateSecretId"></a>

```typescript
public resetCertificateSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsType">dnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsZoneName">dnsZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.managedType">managedType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretIdInput">certificateSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```typescript
public readonly certificateSecretVersion: number;
```

- *Type:* number

---

##### `dnsType`<sup>Required</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsType"></a>

```typescript
public readonly dnsType: string;
```

- *Type:* string

---

##### `dnsZoneName`<sup>Required</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsZoneName"></a>

```typescript
public readonly dnsZoneName: string;
```

- *Type:* string

---

##### `managedType`<sup>Required</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.managedType"></a>

```typescript
public readonly managedType: string;
```

- *Type:* string

---

##### `certificateSecretIdInput`<sup>Optional</sup> <a name="certificateSecretIdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretIdInput"></a>

```typescript
public readonly certificateSecretIdInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```typescript
public readonly certificateSecretId: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationIntegrationInstanceAlternateCustomEndpoints;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>

---


### IntegrationIntegrationInstanceAttachmentsList <a name="IntegrationIntegrationInstanceAttachmentsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.get"></a>

```typescript
public get(index: number): IntegrationIntegrationInstanceAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IntegrationIntegrationInstanceAttachmentsOutputReference <a name="IntegrationIntegrationInstanceAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.isImplicit">isImplicit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetInstanceUrl">targetInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetRole">targetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetServiceType">targetServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments">IntegrationIntegrationInstanceAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isImplicit`<sup>Required</sup> <a name="isImplicit" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.isImplicit"></a>

```typescript
public readonly isImplicit: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetInstanceUrl`<sup>Required</sup> <a name="targetInstanceUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetInstanceUrl"></a>

```typescript
public readonly targetInstanceUrl: string;
```

- *Type:* string

---

##### `targetRole`<sup>Required</sup> <a name="targetRole" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetRole"></a>

```typescript
public readonly targetRole: string;
```

- *Type:* string

---

##### `targetServiceType`<sup>Required</sup> <a name="targetServiceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetServiceType"></a>

```typescript
public readonly targetServiceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationIntegrationInstanceAttachments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments">IntegrationIntegrationInstanceAttachments</a>

---


### IntegrationIntegrationInstanceCustomEndpointOutputReference <a name="IntegrationIntegrationInstanceCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resetCertificateSecretId">resetCertificateSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resetDnsType">resetDnsType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateSecretId` <a name="resetCertificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resetCertificateSecretId"></a>

```typescript
public resetCertificateSecretId(): void
```

##### `resetDnsType` <a name="resetDnsType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resetDnsType"></a>

```typescript
public resetDnsType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.managedType">managedType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretIdInput">certificateSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsTypeInput">dnsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneNameInput">dnsZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsType">dnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneName">dnsZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```typescript
public readonly certificateSecretVersion: number;
```

- *Type:* number

---

##### `managedType`<sup>Required</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.managedType"></a>

```typescript
public readonly managedType: string;
```

- *Type:* string

---

##### `certificateSecretIdInput`<sup>Optional</sup> <a name="certificateSecretIdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretIdInput"></a>

```typescript
public readonly certificateSecretIdInput: string;
```

- *Type:* string

---

##### `dnsTypeInput`<sup>Optional</sup> <a name="dnsTypeInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsTypeInput"></a>

```typescript
public readonly dnsTypeInput: string;
```

- *Type:* string

---

##### `dnsZoneNameInput`<sup>Optional</sup> <a name="dnsZoneNameInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneNameInput"></a>

```typescript
public readonly dnsZoneNameInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretId"></a>

```typescript
public readonly certificateSecretId: string;
```

- *Type:* string

---

##### `dnsType`<sup>Required</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsType"></a>

```typescript
public readonly dnsType: string;
```

- *Type:* string

---

##### `dnsZoneName`<sup>Required</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneName"></a>

```typescript
public readonly dnsZoneName: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationIntegrationInstanceCustomEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

---


### IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get"></a>

```typescript
public get(index: number): IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged">timeRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `timeRoleChanged`<sup>Required</sup> <a name="timeRoleChanged" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged"></a>

```typescript
public readonly timeRoleChanged: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a>

---


### IntegrationIntegrationInstanceDisasterRecoveryDetailsList <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.get"></a>

```typescript
public get(index: number): IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails">crossRegionIntegrationInstanceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl">regionalInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails">IntegrationIntegrationInstanceDisasterRecoveryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossRegionIntegrationInstanceDetails`<sup>Required</sup> <a name="crossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails"></a>

```typescript
public readonly crossRegionIntegrationInstanceDetails: IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a>

---

##### `regionalInstanceUrl`<sup>Required</sup> <a name="regionalInstanceUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl"></a>

```typescript
public readonly regionalInstanceUrl: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationIntegrationInstanceDisasterRecoveryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails">IntegrationIntegrationInstanceDisasterRecoveryDetails</a>

---


### IntegrationIntegrationInstanceIdcsInfoList <a name="IntegrationIntegrationInstanceIdcsInfoList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.get"></a>

```typescript
public get(index: number): IntegrationIntegrationInstanceIdcsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IntegrationIntegrationInstanceIdcsInfoOutputReference <a name="IntegrationIntegrationInstanceIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppDisplayName">idcsAppDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppId">idcsAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl">idcsAppLocationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppName">idcsAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">instancePrimaryAudienceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo">IntegrationIntegrationInstanceIdcsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idcsAppDisplayName`<sup>Required</sup> <a name="idcsAppDisplayName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```typescript
public readonly idcsAppDisplayName: string;
```

- *Type:* string

---

##### `idcsAppId`<sup>Required</sup> <a name="idcsAppId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppId"></a>

```typescript
public readonly idcsAppId: string;
```

- *Type:* string

---

##### `idcsAppLocationUrl`<sup>Required</sup> <a name="idcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```typescript
public readonly idcsAppLocationUrl: string;
```

- *Type:* string

---

##### `idcsAppName`<sup>Required</sup> <a name="idcsAppName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppName"></a>

```typescript
public readonly idcsAppName: string;
```

- *Type:* string

---

##### `instancePrimaryAudienceUrl`<sup>Required</sup> <a name="instancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```typescript
public readonly instancePrimaryAudienceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationIntegrationInstanceIdcsInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo">IntegrationIntegrationInstanceIdcsInfo</a>

---


### IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList <a name="IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get"></a>

```typescript
public get(index: number): IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>[]

---


### IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference <a name="IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resetAllowlistedIps">resetAllowlistedIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowlistedIps` <a name="resetAllowlistedIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resetAllowlistedIps"></a>

```typescript
public resetAllowlistedIps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIpsInput">allowlistedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps">allowlistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowlistedIpsInput`<sup>Optional</sup> <a name="allowlistedIpsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIpsInput"></a>

```typescript
public readonly allowlistedIpsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `allowlistedIps`<sup>Required</sup> <a name="allowlistedIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps"></a>

```typescript
public readonly allowlistedIps: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>

---


### IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference <a name="IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.putAllowlistedHttpVcns">putAllowlistedHttpVcns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetAllowlistedHttpIps">resetAllowlistedHttpIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetAllowlistedHttpVcns">resetAllowlistedHttpVcns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetIsIntegrationVcnAllowlisted">resetIsIntegrationVcnAllowlisted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowlistedHttpVcns` <a name="putAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.putAllowlistedHttpVcns"></a>

```typescript
public putAllowlistedHttpVcns(value: IResolvable | IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.putAllowlistedHttpVcns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>[]

---

##### `resetAllowlistedHttpIps` <a name="resetAllowlistedHttpIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetAllowlistedHttpIps"></a>

```typescript
public resetAllowlistedHttpIps(): void
```

##### `resetAllowlistedHttpVcns` <a name="resetAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetAllowlistedHttpVcns"></a>

```typescript
public resetAllowlistedHttpVcns(): void
```

##### `resetIsIntegrationVcnAllowlisted` <a name="resetIsIntegrationVcnAllowlisted" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetIsIntegrationVcnAllowlisted"></a>

```typescript
public resetIsIntegrationVcnAllowlisted(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns">allowlistedHttpVcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIpsInput">allowlistedHttpIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcnsInput">allowlistedHttpVcnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlistedInput">isIntegrationVcnAllowlistedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointTypeInput">networkEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps">allowlistedHttpIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted">isIntegrationVcnAllowlisted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowlistedHttpVcns`<sup>Required</sup> <a name="allowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns"></a>

```typescript
public readonly allowlistedHttpVcns: IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList</a>

---

##### `allowlistedHttpIpsInput`<sup>Optional</sup> <a name="allowlistedHttpIpsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIpsInput"></a>

```typescript
public readonly allowlistedHttpIpsInput: string[];
```

- *Type:* string[]

---

##### `allowlistedHttpVcnsInput`<sup>Optional</sup> <a name="allowlistedHttpVcnsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcnsInput"></a>

```typescript
public readonly allowlistedHttpVcnsInput: IResolvable | IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>[]

---

##### `isIntegrationVcnAllowlistedInput`<sup>Optional</sup> <a name="isIntegrationVcnAllowlistedInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlistedInput"></a>

```typescript
public readonly isIntegrationVcnAllowlistedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkEndpointTypeInput`<sup>Optional</sup> <a name="networkEndpointTypeInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointTypeInput"></a>

```typescript
public readonly networkEndpointTypeInput: string;
```

- *Type:* string

---

##### `allowlistedHttpIps`<sup>Required</sup> <a name="allowlistedHttpIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps"></a>

```typescript
public readonly allowlistedHttpIps: string[];
```

- *Type:* string[]

---

##### `isIntegrationVcnAllowlisted`<sup>Required</sup> <a name="isIntegrationVcnAllowlisted" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted"></a>

```typescript
public readonly isIntegrationVcnAllowlisted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationIntegrationInstanceNetworkEndpointDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

---


### IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList <a name="IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get"></a>

```typescript
public get(index: number): IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference <a name="IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType">outboundConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection">IntegrationIntegrationInstancePrivateEndpointOutboundConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `outboundConnectionType`<sup>Required</sup> <a name="outboundConnectionType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType"></a>

```typescript
public readonly outboundConnectionType: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationIntegrationInstancePrivateEndpointOutboundConnection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection">IntegrationIntegrationInstancePrivateEndpointOutboundConnection</a>

---


### IntegrationIntegrationInstanceTimeoutsOutputReference <a name="IntegrationIntegrationInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { integrationIntegrationInstance } from 'rhizo-co-terraform-provider-oci'

new integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationIntegrationInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a>

---



