# `logAnalyticsLogAnalyticsEntity` Submodule <a name="`logAnalyticsLogAnalyticsEntity` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLogAnalyticsEntity <a name="LogAnalyticsLogAnalyticsEntity" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity oci_log_analytics_log_analytics_entity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

new logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity(scope: Construct, id: string, config: LogAnalyticsLogAnalyticsEntityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig">LogAnalyticsLogAnalyticsEntityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig">LogAnalyticsLogAnalyticsEntityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetCloudResourceId">resetCloudResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetManagementAgentId">resetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetSourceId">resetSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeLastDiscovered">resetTimeLastDiscovered</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimezoneRegion">resetTimezoneRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putMetadata"></a>

```typescript
public putMetadata(value: LogAnalyticsLogAnalyticsEntityMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts"></a>

```typescript
public putTimeouts(value: LogAnalyticsLogAnalyticsEntityTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

---

##### `resetCloudResourceId` <a name="resetCloudResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetCloudResourceId"></a>

```typescript
public resetCloudResourceId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetHostname` <a name="resetHostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagementAgentId` <a name="resetManagementAgentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetManagementAgentId"></a>

```typescript
public resetManagementAgentId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetProperties` <a name="resetProperties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetSourceId` <a name="resetSourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetSourceId"></a>

```typescript
public resetSourceId(): void
```

##### `resetTimeLastDiscovered` <a name="resetTimeLastDiscovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeLastDiscovered"></a>

```typescript
public resetTimeLastDiscovered(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimezoneRegion` <a name="resetTimezoneRegion" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimezoneRegion"></a>

```typescript
public resetTimezoneRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsLogAnalyticsEntity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LogAnalyticsLogAnalyticsEntity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogAnalyticsLogAnalyticsEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogAnalyticsLogAnalyticsEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsLogAnalyticsEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.areLogsCollected">areLogsCollected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeInternalName">entityTypeInternalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentCompartmentId">managementAgentCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentDisplayName">managementAgentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference">LogAnalyticsLogAnalyticsEntityMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference">LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceIdInput">cloudResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeNameInput">entityTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadataInput">metadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceIdInput">sourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscoveredInput">timeLastDiscoveredInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegionInput">timezoneRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceId">cloudResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeName">entityTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscovered">timeLastDiscovered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegion">timezoneRegion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `areLogsCollected`<sup>Required</sup> <a name="areLogsCollected" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.areLogsCollected"></a>

```typescript
public readonly areLogsCollected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `entityTypeInternalName`<sup>Required</sup> <a name="entityTypeInternalName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeInternalName"></a>

```typescript
public readonly entityTypeInternalName: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managementAgentCompartmentId`<sup>Required</sup> <a name="managementAgentCompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentCompartmentId"></a>

```typescript
public readonly managementAgentCompartmentId: string;
```

- *Type:* string

---

##### `managementAgentDisplayName`<sup>Required</sup> <a name="managementAgentDisplayName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentDisplayName"></a>

```typescript
public readonly managementAgentDisplayName: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadata"></a>

```typescript
public readonly metadata: LogAnalyticsLogAnalyticsEntityMetadataOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference">LogAnalyticsLogAnalyticsEntityMetadataOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeouts"></a>

```typescript
public readonly timeouts: LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference">LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `cloudResourceIdInput`<sup>Optional</sup> <a name="cloudResourceIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceIdInput"></a>

```typescript
public readonly cloudResourceIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `entityTypeNameInput`<sup>Optional</sup> <a name="entityTypeNameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeNameInput"></a>

```typescript
public readonly entityTypeNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentIdInput"></a>

```typescript
public readonly managementAgentIdInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadataInput"></a>

```typescript
public readonly metadataInput: LogAnalyticsLogAnalyticsEntityMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: string;
```

- *Type:* string

---

##### `timeLastDiscoveredInput`<sup>Optional</sup> <a name="timeLastDiscoveredInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscoveredInput"></a>

```typescript
public readonly timeLastDiscoveredInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LogAnalyticsLogAnalyticsEntityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

---

##### `timezoneRegionInput`<sup>Optional</sup> <a name="timezoneRegionInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegionInput"></a>

```typescript
public readonly timezoneRegionInput: string;
```

- *Type:* string

---

##### `cloudResourceId`<sup>Required</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceId"></a>

```typescript
public readonly cloudResourceId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `entityTypeName`<sup>Required</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeName"></a>

```typescript
public readonly entityTypeName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `timeLastDiscovered`<sup>Required</sup> <a name="timeLastDiscovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscovered"></a>

```typescript
public readonly timeLastDiscovered: string;
```

- *Type:* string

---

##### `timezoneRegion`<sup>Required</sup> <a name="timezoneRegion" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegion"></a>

```typescript
public readonly timezoneRegion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLogAnalyticsEntityConfig <a name="LogAnalyticsLogAnalyticsEntityConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

const logAnalyticsLogAnalyticsEntityConfig: logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#compartment_id LogAnalyticsLogAnalyticsEntity#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.entityTypeName">entityTypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#entity_type_name LogAnalyticsLogAnalyticsEntity#entity_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#namespace LogAnalyticsLogAnalyticsEntity#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.cloudResourceId">cloudResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#cloud_resource_id LogAnalyticsLogAnalyticsEntity#cloud_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#defined_tags LogAnalyticsLogAnalyticsEntity#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#freeform_tags LogAnalyticsLogAnalyticsEntity#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#hostname LogAnalyticsLogAnalyticsEntity#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#id LogAnalyticsLogAnalyticsEntity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#management_agent_id LogAnalyticsLogAnalyticsEntity#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#properties LogAnalyticsLogAnalyticsEntity#properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.sourceId">sourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#source_id LogAnalyticsLogAnalyticsEntity#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeLastDiscovered">timeLastDiscovered</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#time_last_discovered LogAnalyticsLogAnalyticsEntity#time_last_discovered}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timezoneRegion">timezoneRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timezone_region LogAnalyticsLogAnalyticsEntity#timezone_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#compartment_id LogAnalyticsLogAnalyticsEntity#compartment_id}.

---

##### `entityTypeName`<sup>Required</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.entityTypeName"></a>

```typescript
public readonly entityTypeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#entity_type_name LogAnalyticsLogAnalyticsEntity#entity_type_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#namespace LogAnalyticsLogAnalyticsEntity#namespace}.

---

##### `cloudResourceId`<sup>Optional</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.cloudResourceId"></a>

```typescript
public readonly cloudResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#cloud_resource_id LogAnalyticsLogAnalyticsEntity#cloud_resource_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#defined_tags LogAnalyticsLogAnalyticsEntity#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#freeform_tags LogAnalyticsLogAnalyticsEntity#freeform_tags}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#hostname LogAnalyticsLogAnalyticsEntity#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#id LogAnalyticsLogAnalyticsEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#management_agent_id LogAnalyticsLogAnalyticsEntity#management_agent_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.metadata"></a>

```typescript
public readonly metadata: LogAnalyticsLogAnalyticsEntityMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#metadata LogAnalyticsLogAnalyticsEntity#metadata}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#properties LogAnalyticsLogAnalyticsEntity#properties}.

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#source_id LogAnalyticsLogAnalyticsEntity#source_id}.

---

##### `timeLastDiscovered`<sup>Optional</sup> <a name="timeLastDiscovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeLastDiscovered"></a>

```typescript
public readonly timeLastDiscovered: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#time_last_discovered LogAnalyticsLogAnalyticsEntity#time_last_discovered}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LogAnalyticsLogAnalyticsEntityTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timeouts LogAnalyticsLogAnalyticsEntity#timeouts}

---

##### `timezoneRegion`<sup>Optional</sup> <a name="timezoneRegion" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timezoneRegion"></a>

```typescript
public readonly timezoneRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timezone_region LogAnalyticsLogAnalyticsEntity#timezone_region}.

---

### LogAnalyticsLogAnalyticsEntityMetadata <a name="LogAnalyticsLogAnalyticsEntityMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

const logAnalyticsLogAnalyticsEntityMetadata: logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>[]</code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata.property.items"></a>

```typescript
public readonly items: IResolvable | LogAnalyticsLogAnalyticsEntityMetadataItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#items LogAnalyticsLogAnalyticsEntity#items}

---

### LogAnalyticsLogAnalyticsEntityMetadataItems <a name="LogAnalyticsLogAnalyticsEntityMetadataItems" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

const logAnalyticsLogAnalyticsEntityMetadataItems: logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#type LogAnalyticsLogAnalyticsEntity#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#value LogAnalyticsLogAnalyticsEntity#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#type LogAnalyticsLogAnalyticsEntity#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#value LogAnalyticsLogAnalyticsEntity#value}.

---

### LogAnalyticsLogAnalyticsEntityTimeouts <a name="LogAnalyticsLogAnalyticsEntityTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

const logAnalyticsLogAnalyticsEntityTimeouts: logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#create LogAnalyticsLogAnalyticsEntity#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#delete LogAnalyticsLogAnalyticsEntity#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#update LogAnalyticsLogAnalyticsEntity#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#create LogAnalyticsLogAnalyticsEntity#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#delete LogAnalyticsLogAnalyticsEntity#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#update LogAnalyticsLogAnalyticsEntity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLogAnalyticsEntityMetadataItemsList <a name="LogAnalyticsLogAnalyticsEntityMetadataItemsList" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

new logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.get"></a>

```typescript
public get(index: number): LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogAnalyticsLogAnalyticsEntityMetadataItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>[]

---


### LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference <a name="LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

new logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogAnalyticsLogAnalyticsEntityMetadataItems;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>

---


### LogAnalyticsLogAnalyticsEntityMetadataOutputReference <a name="LogAnalyticsLogAnalyticsEntityMetadataOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

new logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | LogAnalyticsLogAnalyticsEntityMetadataItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>[]

---

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList">LogAnalyticsLogAnalyticsEntityMetadataItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.items"></a>

```typescript
public readonly items: LogAnalyticsLogAnalyticsEntityMetadataItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList">LogAnalyticsLogAnalyticsEntityMetadataItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | LogAnalyticsLogAnalyticsEntityMetadataItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogAnalyticsLogAnalyticsEntityMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

---


### LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference <a name="LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsEntity } from 'rhizo-co-terraform-provider-oci'

new logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogAnalyticsLogAnalyticsEntityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

---



