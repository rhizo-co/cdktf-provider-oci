# `analyticsAnalyticsInstance` Submodule <a name="`analyticsAnalyticsInstance` Submodule" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnalyticsAnalyticsInstance <a name="AnalyticsAnalyticsInstance" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance oci_analytics_analytics_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

new analyticsAnalyticsInstance.AnalyticsAnalyticsInstance(scope: Construct, id: string, config: AnalyticsAnalyticsInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig">AnalyticsAnalyticsInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig">AnalyticsAnalyticsInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putNetworkEndpointDetails">putNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetAdminUser">resetAdminUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetEmailNotification">resetEmailNotification</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetFeatureBundle">resetFeatureBundle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetIdcsAccessToken">resetIdcsAccessToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetNetworkEndpointDetails">resetNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetUpdateChannel">resetUpdateChannel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacity` <a name="putCapacity" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putCapacity"></a>

```typescript
public putCapacity(value: AnalyticsAnalyticsInstanceCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putCapacity.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a>

---

##### `putNetworkEndpointDetails` <a name="putNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putNetworkEndpointDetails"></a>

```typescript
public putNetworkEndpointDetails(value: AnalyticsAnalyticsInstanceNetworkEndpointDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putNetworkEndpointDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: AnalyticsAnalyticsInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a>

---

##### `resetAdminUser` <a name="resetAdminUser" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetAdminUser"></a>

```typescript
public resetAdminUser(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainId` <a name="resetDomainId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetEmailNotification` <a name="resetEmailNotification" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetEmailNotification"></a>

```typescript
public resetEmailNotification(): void
```

##### `resetFeatureBundle` <a name="resetFeatureBundle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetFeatureBundle"></a>

```typescript
public resetFeatureBundle(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdcsAccessToken` <a name="resetIdcsAccessToken" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetIdcsAccessToken"></a>

```typescript
public resetIdcsAccessToken(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetNetworkEndpointDetails` <a name="resetNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetNetworkEndpointDetails"></a>

```typescript
public resetNetworkEndpointDetails(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateChannel` <a name="resetUpdateChannel" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.resetUpdateChannel"></a>

```typescript
public resetUpdateChannel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AnalyticsAnalyticsInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isConstruct"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformElement"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformResource"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AnalyticsAnalyticsInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AnalyticsAnalyticsInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AnalyticsAnalyticsInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AnalyticsAnalyticsInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference">AnalyticsAnalyticsInstanceCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.networkEndpointDetails">networkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference">AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.serviceUrl">serviceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference">AnalyticsAnalyticsInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.adminUserInput">adminUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.capacityInput">capacityInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.emailNotificationInput">emailNotificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureBundleInput">featureBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureSetInput">featureSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.idcsAccessTokenInput">idcsAccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.networkEndpointDetailsInput">networkEndpointDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.updateChannelInput">updateChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.adminUser">adminUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.emailNotification">emailNotification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureBundle">featureBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureSet">featureSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.idcsAccessToken">idcsAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.updateChannel">updateChannel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.capacity"></a>

```typescript
public readonly capacity: AnalyticsAnalyticsInstanceCapacityOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference">AnalyticsAnalyticsInstanceCapacityOutputReference</a>

---

##### `networkEndpointDetails`<sup>Required</sup> <a name="networkEndpointDetails" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.networkEndpointDetails"></a>

```typescript
public readonly networkEndpointDetails: AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference">AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference</a>

---

##### `serviceUrl`<sup>Required</sup> <a name="serviceUrl" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.serviceUrl"></a>

```typescript
public readonly serviceUrl: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeouts"></a>

```typescript
public readonly timeouts: AnalyticsAnalyticsInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference">AnalyticsAnalyticsInstanceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `adminUserInput`<sup>Optional</sup> <a name="adminUserInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.adminUserInput"></a>

```typescript
public readonly adminUserInput: string;
```

- *Type:* string

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.capacityInput"></a>

```typescript
public readonly capacityInput: AnalyticsAnalyticsInstanceCapacity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `emailNotificationInput`<sup>Optional</sup> <a name="emailNotificationInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.emailNotificationInput"></a>

```typescript
public readonly emailNotificationInput: string;
```

- *Type:* string

---

##### `featureBundleInput`<sup>Optional</sup> <a name="featureBundleInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureBundleInput"></a>

```typescript
public readonly featureBundleInput: string;
```

- *Type:* string

---

##### `featureSetInput`<sup>Optional</sup> <a name="featureSetInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureSetInput"></a>

```typescript
public readonly featureSetInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idcsAccessTokenInput`<sup>Optional</sup> <a name="idcsAccessTokenInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.idcsAccessTokenInput"></a>

```typescript
public readonly idcsAccessTokenInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkEndpointDetailsInput`<sup>Optional</sup> <a name="networkEndpointDetailsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.networkEndpointDetailsInput"></a>

```typescript
public readonly networkEndpointDetailsInput: AnalyticsAnalyticsInstanceNetworkEndpointDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AnalyticsAnalyticsInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a>

---

##### `updateChannelInput`<sup>Optional</sup> <a name="updateChannelInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.updateChannelInput"></a>

```typescript
public readonly updateChannelInput: string;
```

- *Type:* string

---

##### `adminUser`<sup>Required</sup> <a name="adminUser" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.adminUser"></a>

```typescript
public readonly adminUser: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `emailNotification`<sup>Required</sup> <a name="emailNotification" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.emailNotification"></a>

```typescript
public readonly emailNotification: string;
```

- *Type:* string

---

##### `featureBundle`<sup>Required</sup> <a name="featureBundle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureBundle"></a>

```typescript
public readonly featureBundle: string;
```

- *Type:* string

---

##### `featureSet`<sup>Required</sup> <a name="featureSet" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.featureSet"></a>

```typescript
public readonly featureSet: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.idcsAccessToken"></a>

```typescript
public readonly idcsAccessToken: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updateChannel`<sup>Required</sup> <a name="updateChannel" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.updateChannel"></a>

```typescript
public readonly updateChannel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AnalyticsAnalyticsInstanceCapacity <a name="AnalyticsAnalyticsInstanceCapacity" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity.Initializer"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

const analyticsAnalyticsInstanceCapacity: analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity.property.capacityType">capacityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity_type AnalyticsAnalyticsInstance#capacity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity.property.capacityValue">capacityValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity_value AnalyticsAnalyticsInstance#capacity_value}. |

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity_type AnalyticsAnalyticsInstance#capacity_type}.

---

##### `capacityValue`<sup>Required</sup> <a name="capacityValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity.property.capacityValue"></a>

```typescript
public readonly capacityValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity_value AnalyticsAnalyticsInstance#capacity_value}.

---

### AnalyticsAnalyticsInstanceConfig <a name="AnalyticsAnalyticsInstanceConfig" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.Initializer"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

const analyticsAnalyticsInstanceConfig: analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a></code> | capacity block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#compartment_id AnalyticsAnalyticsInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.featureSet">featureSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#feature_set AnalyticsAnalyticsInstance#feature_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.licenseType">licenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#license_type AnalyticsAnalyticsInstance#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#name AnalyticsAnalyticsInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.adminUser">adminUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#admin_user AnalyticsAnalyticsInstance#admin_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#defined_tags AnalyticsAnalyticsInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#description AnalyticsAnalyticsInstance#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#domain_id AnalyticsAnalyticsInstance#domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.emailNotification">emailNotification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#email_notification AnalyticsAnalyticsInstance#email_notification}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.featureBundle">featureBundle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#feature_bundle AnalyticsAnalyticsInstance#feature_bundle}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#freeform_tags AnalyticsAnalyticsInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#id AnalyticsAnalyticsInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.idcsAccessToken">idcsAccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#idcs_access_token AnalyticsAnalyticsInstance#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#kms_key_id AnalyticsAnalyticsInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.networkEndpointDetails">networkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a></code> | network_endpoint_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#state AnalyticsAnalyticsInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.updateChannel">updateChannel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#update_channel AnalyticsAnalyticsInstance#update_channel}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.capacity"></a>

```typescript
public readonly capacity: AnalyticsAnalyticsInstanceCapacity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#capacity AnalyticsAnalyticsInstance#capacity}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#compartment_id AnalyticsAnalyticsInstance#compartment_id}.

---

##### `featureSet`<sup>Required</sup> <a name="featureSet" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.featureSet"></a>

```typescript
public readonly featureSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#feature_set AnalyticsAnalyticsInstance#feature_set}.

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#license_type AnalyticsAnalyticsInstance#license_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#name AnalyticsAnalyticsInstance#name}.

---

##### `adminUser`<sup>Optional</sup> <a name="adminUser" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.adminUser"></a>

```typescript
public readonly adminUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#admin_user AnalyticsAnalyticsInstance#admin_user}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#defined_tags AnalyticsAnalyticsInstance#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#description AnalyticsAnalyticsInstance#description}.

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#domain_id AnalyticsAnalyticsInstance#domain_id}.

---

##### `emailNotification`<sup>Optional</sup> <a name="emailNotification" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.emailNotification"></a>

```typescript
public readonly emailNotification: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#email_notification AnalyticsAnalyticsInstance#email_notification}.

---

##### `featureBundle`<sup>Optional</sup> <a name="featureBundle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.featureBundle"></a>

```typescript
public readonly featureBundle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#feature_bundle AnalyticsAnalyticsInstance#feature_bundle}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#freeform_tags AnalyticsAnalyticsInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#id AnalyticsAnalyticsInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idcsAccessToken`<sup>Optional</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.idcsAccessToken"></a>

```typescript
public readonly idcsAccessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#idcs_access_token AnalyticsAnalyticsInstance#idcs_access_token}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#kms_key_id AnalyticsAnalyticsInstance#kms_key_id}.

---

##### `networkEndpointDetails`<sup>Optional</sup> <a name="networkEndpointDetails" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.networkEndpointDetails"></a>

```typescript
public readonly networkEndpointDetails: AnalyticsAnalyticsInstanceNetworkEndpointDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a>

network_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_endpoint_details AnalyticsAnalyticsInstance#network_endpoint_details}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#state AnalyticsAnalyticsInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AnalyticsAnalyticsInstanceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#timeouts AnalyticsAnalyticsInstance#timeouts}

---

##### `updateChannel`<sup>Optional</sup> <a name="updateChannel" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceConfig.property.updateChannel"></a>

```typescript
public readonly updateChannel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#update_channel AnalyticsAnalyticsInstance#update_channel}.

---

### AnalyticsAnalyticsInstanceNetworkEndpointDetails <a name="AnalyticsAnalyticsInstanceNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.Initializer"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

const analyticsAnalyticsInstanceNetworkEndpointDetails: analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_endpoint_type AnalyticsAnalyticsInstance#network_endpoint_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_security_group_ids AnalyticsAnalyticsInstance#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#subnet_id AnalyticsAnalyticsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#vcn_id AnalyticsAnalyticsInstance#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.whitelistedIps">whitelistedIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_ips AnalyticsAnalyticsInstance#whitelisted_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.whitelistedServices">whitelistedServices</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_services AnalyticsAnalyticsInstance#whitelisted_services}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.whitelistedVcns">whitelistedVcns</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>[]</code> | whitelisted_vcns block. |

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_endpoint_type AnalyticsAnalyticsInstance#network_endpoint_type}.

---

##### `networkSecurityGroupIds`<sup>Optional</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.networkSecurityGroupIds"></a>

```typescript
public readonly networkSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#network_security_group_ids AnalyticsAnalyticsInstance#network_security_group_ids}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#subnet_id AnalyticsAnalyticsInstance#subnet_id}.

---

##### `vcnId`<sup>Optional</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#vcn_id AnalyticsAnalyticsInstance#vcn_id}.

---

##### `whitelistedIps`<sup>Optional</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.whitelistedIps"></a>

```typescript
public readonly whitelistedIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_ips AnalyticsAnalyticsInstance#whitelisted_ips}.

---

##### `whitelistedServices`<sup>Optional</sup> <a name="whitelistedServices" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.whitelistedServices"></a>

```typescript
public readonly whitelistedServices: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_services AnalyticsAnalyticsInstance#whitelisted_services}.

---

##### `whitelistedVcns`<sup>Optional</sup> <a name="whitelistedVcns" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails.property.whitelistedVcns"></a>

```typescript
public readonly whitelistedVcns: IResolvable | AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>[]

whitelisted_vcns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_vcns AnalyticsAnalyticsInstance#whitelisted_vcns}

---

### AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns <a name="AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns.Initializer"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

const analyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns: analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#id AnalyticsAnalyticsInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns.property.whitelistedIps">whitelistedIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_ips AnalyticsAnalyticsInstance#whitelisted_ips}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#id AnalyticsAnalyticsInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `whitelistedIps`<sup>Optional</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns.property.whitelistedIps"></a>

```typescript
public readonly whitelistedIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#whitelisted_ips AnalyticsAnalyticsInstance#whitelisted_ips}.

---

### AnalyticsAnalyticsInstanceTimeouts <a name="AnalyticsAnalyticsInstanceTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.Initializer"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

const analyticsAnalyticsInstanceTimeouts: analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#create AnalyticsAnalyticsInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#delete AnalyticsAnalyticsInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#update AnalyticsAnalyticsInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#create AnalyticsAnalyticsInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#delete AnalyticsAnalyticsInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance#update AnalyticsAnalyticsInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnalyticsAnalyticsInstanceCapacityOutputReference <a name="AnalyticsAnalyticsInstanceCapacityOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.Initializer"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

new analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityTypeInput">capacityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityValueInput">capacityValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityType">capacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityValue">capacityValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityTypeInput`<sup>Optional</sup> <a name="capacityTypeInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityTypeInput"></a>

```typescript
public readonly capacityTypeInput: string;
```

- *Type:* string

---

##### `capacityValueInput`<sup>Optional</sup> <a name="capacityValueInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityValueInput"></a>

```typescript
public readonly capacityValueInput: number;
```

- *Type:* number

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- *Type:* string

---

##### `capacityValue`<sup>Required</sup> <a name="capacityValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityValue"></a>

```typescript
public readonly capacityValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AnalyticsAnalyticsInstanceCapacity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceCapacity">AnalyticsAnalyticsInstanceCapacity</a>

---


### AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference <a name="AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

new analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.putWhitelistedVcns">putWhitelistedVcns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetNetworkSecurityGroupIds">resetNetworkSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetVcnId">resetVcnId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetWhitelistedIps">resetWhitelistedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetWhitelistedServices">resetWhitelistedServices</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetWhitelistedVcns">resetWhitelistedVcns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWhitelistedVcns` <a name="putWhitelistedVcns" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.putWhitelistedVcns"></a>

```typescript
public putWhitelistedVcns(value: IResolvable | AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.putWhitelistedVcns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>[]

---

##### `resetNetworkSecurityGroupIds` <a name="resetNetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetNetworkSecurityGroupIds"></a>

```typescript
public resetNetworkSecurityGroupIds(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVcnId` <a name="resetVcnId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetVcnId"></a>

```typescript
public resetVcnId(): void
```

##### `resetWhitelistedIps` <a name="resetWhitelistedIps" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetWhitelistedIps"></a>

```typescript
public resetWhitelistedIps(): void
```

##### `resetWhitelistedServices` <a name="resetWhitelistedServices" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetWhitelistedServices"></a>

```typescript
public resetWhitelistedServices(): void
```

##### `resetWhitelistedVcns` <a name="resetWhitelistedVcns" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resetWhitelistedVcns"></a>

```typescript
public resetWhitelistedVcns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedVcns">whitelistedVcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointTypeInput">networkEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIdsInput">networkSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedIpsInput">whitelistedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedServicesInput">whitelistedServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedVcnsInput">whitelistedVcnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedIps">whitelistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedServices">whitelistedServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `whitelistedVcns`<sup>Required</sup> <a name="whitelistedVcns" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedVcns"></a>

```typescript
public readonly whitelistedVcns: AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList</a>

---

##### `networkEndpointTypeInput`<sup>Optional</sup> <a name="networkEndpointTypeInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointTypeInput"></a>

```typescript
public readonly networkEndpointTypeInput: string;
```

- *Type:* string

---

##### `networkSecurityGroupIdsInput`<sup>Optional</sup> <a name="networkSecurityGroupIdsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIdsInput"></a>

```typescript
public readonly networkSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `whitelistedIpsInput`<sup>Optional</sup> <a name="whitelistedIpsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedIpsInput"></a>

```typescript
public readonly whitelistedIpsInput: string[];
```

- *Type:* string[]

---

##### `whitelistedServicesInput`<sup>Optional</sup> <a name="whitelistedServicesInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedServicesInput"></a>

```typescript
public readonly whitelistedServicesInput: string[];
```

- *Type:* string[]

---

##### `whitelistedVcnsInput`<sup>Optional</sup> <a name="whitelistedVcnsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedVcnsInput"></a>

```typescript
public readonly whitelistedVcnsInput: IResolvable | AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>[]

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

---

##### `networkSecurityGroupIds`<sup>Required</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIds"></a>

```typescript
public readonly networkSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `whitelistedIps`<sup>Required</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedIps"></a>

```typescript
public readonly whitelistedIps: string[];
```

- *Type:* string[]

---

##### `whitelistedServices`<sup>Required</sup> <a name="whitelistedServices" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedServices"></a>

```typescript
public readonly whitelistedServices: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AnalyticsAnalyticsInstanceNetworkEndpointDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetails">AnalyticsAnalyticsInstanceNetworkEndpointDetails</a>

---


### AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList <a name="AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

new analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.get"></a>

```typescript
public get(index: number): AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>[]

---


### AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference <a name="AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

new analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resetWhitelistedIps">resetWhitelistedIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetWhitelistedIps` <a name="resetWhitelistedIps" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resetWhitelistedIps"></a>

```typescript
public resetWhitelistedIps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIpsInput">whitelistedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIps">whitelistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `whitelistedIpsInput`<sup>Optional</sup> <a name="whitelistedIpsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIpsInput"></a>

```typescript
public readonly whitelistedIpsInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `whitelistedIps`<sup>Required</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIps"></a>

```typescript
public readonly whitelistedIps: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">AnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>

---


### AnalyticsAnalyticsInstanceTimeoutsOutputReference <a name="AnalyticsAnalyticsInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { analyticsAnalyticsInstance } from 'rhizo-co-terraform-provider-oci'

new analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AnalyticsAnalyticsInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstance.AnalyticsAnalyticsInstanceTimeouts">AnalyticsAnalyticsInstanceTimeouts</a>

---



