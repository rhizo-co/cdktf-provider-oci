# `generativeAiAgentAgentEndpoint` Submodule <a name="`generativeAiAgentAgentEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenerativeAiAgentAgentEndpoint <a name="GenerativeAiAgentAgentEndpoint" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint oci_generative_ai_agent_agent_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer"></a>

```typescript
import { generativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

new generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint(scope: Construct, id: string, config: GenerativeAiAgentAgentEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig">GenerativeAiAgentAgentEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig">GenerativeAiAgentAgentEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putContentModerationConfig">putContentModerationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putSessionConfig">putSessionConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetContentModerationConfig">resetContentModerationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetSessionConfig">resetSessionConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableCitation">resetShouldEnableCitation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableSession">resetShouldEnableSession</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableTrace">resetShouldEnableTrace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContentModerationConfig` <a name="putContentModerationConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putContentModerationConfig"></a>

```typescript
public putContentModerationConfig(value: GenerativeAiAgentAgentEndpointContentModerationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putContentModerationConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a>

---

##### `putSessionConfig` <a name="putSessionConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putSessionConfig"></a>

```typescript
public putSessionConfig(value: GenerativeAiAgentAgentEndpointSessionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putSessionConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: GenerativeAiAgentAgentEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a>

---

##### `resetContentModerationConfig` <a name="resetContentModerationConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetContentModerationConfig"></a>

```typescript
public resetContentModerationConfig(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSessionConfig` <a name="resetSessionConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetSessionConfig"></a>

```typescript
public resetSessionConfig(): void
```

##### `resetShouldEnableCitation` <a name="resetShouldEnableCitation" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableCitation"></a>

```typescript
public resetShouldEnableCitation(): void
```

##### `resetShouldEnableSession` <a name="resetShouldEnableSession" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableSession"></a>

```typescript
public resetShouldEnableSession(): void
```

##### `resetShouldEnableTrace` <a name="resetShouldEnableTrace" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableTrace"></a>

```typescript
public resetShouldEnableTrace(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenerativeAiAgentAgentEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isConstruct"></a>

```typescript
import { generativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformElement"></a>

```typescript
import { generativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformResource"></a>

```typescript
import { generativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport"></a>

```typescript
import { generativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GenerativeAiAgentAgentEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenerativeAiAgentAgentEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenerativeAiAgentAgentEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenerativeAiAgentAgentEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.contentModerationConfig">contentModerationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference">GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.sessionConfig">sessionConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference">GenerativeAiAgentAgentEndpointSessionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference">GenerativeAiAgentAgentEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.contentModerationConfigInput">contentModerationConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.sessionConfigInput">sessionConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableCitationInput">shouldEnableCitationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableSessionInput">shouldEnableSessionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableTraceInput">shouldEnableTraceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableCitation">shouldEnableCitation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableSession">shouldEnableSession</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableTrace">shouldEnableTrace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentModerationConfig`<sup>Required</sup> <a name="contentModerationConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.contentModerationConfig"></a>

```typescript
public readonly contentModerationConfig: GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference">GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `sessionConfig`<sup>Required</sup> <a name="sessionConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.sessionConfig"></a>

```typescript
public readonly sessionConfig: GenerativeAiAgentAgentEndpointSessionConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference">GenerativeAiAgentAgentEndpointSessionConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: GenerativeAiAgentAgentEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference">GenerativeAiAgentAgentEndpointTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `contentModerationConfigInput`<sup>Optional</sup> <a name="contentModerationConfigInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.contentModerationConfigInput"></a>

```typescript
public readonly contentModerationConfigInput: GenerativeAiAgentAgentEndpointContentModerationConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sessionConfigInput`<sup>Optional</sup> <a name="sessionConfigInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.sessionConfigInput"></a>

```typescript
public readonly sessionConfigInput: GenerativeAiAgentAgentEndpointSessionConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a>

---

##### `shouldEnableCitationInput`<sup>Optional</sup> <a name="shouldEnableCitationInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableCitationInput"></a>

```typescript
public readonly shouldEnableCitationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldEnableSessionInput`<sup>Optional</sup> <a name="shouldEnableSessionInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableSessionInput"></a>

```typescript
public readonly shouldEnableSessionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldEnableTraceInput`<sup>Optional</sup> <a name="shouldEnableTraceInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableTraceInput"></a>

```typescript
public readonly shouldEnableTraceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GenerativeAiAgentAgentEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `shouldEnableCitation`<sup>Required</sup> <a name="shouldEnableCitation" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableCitation"></a>

```typescript
public readonly shouldEnableCitation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldEnableSession`<sup>Required</sup> <a name="shouldEnableSession" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableSession"></a>

```typescript
public readonly shouldEnableSession: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldEnableTrace`<sup>Required</sup> <a name="shouldEnableTrace" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableTrace"></a>

```typescript
public readonly shouldEnableTrace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenerativeAiAgentAgentEndpointConfig <a name="GenerativeAiAgentAgentEndpointConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.Initializer"></a>

```typescript
import { generativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

const generativeAiAgentAgentEndpointConfig: generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.agentId">agentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#agent_id GenerativeAiAgentAgentEndpoint#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#compartment_id GenerativeAiAgentAgentEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.contentModerationConfig">contentModerationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a></code> | content_moderation_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#defined_tags GenerativeAiAgentAgentEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#description GenerativeAiAgentAgentEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#display_name GenerativeAiAgentAgentEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#freeform_tags GenerativeAiAgentAgentEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#id GenerativeAiAgentAgentEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.sessionConfig">sessionConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a></code> | session_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableCitation">shouldEnableCitation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_citation GenerativeAiAgentAgentEndpoint#should_enable_citation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableSession">shouldEnableSession</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_session GenerativeAiAgentAgentEndpoint#should_enable_session}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableTrace">shouldEnableTrace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_trace GenerativeAiAgentAgentEndpoint#should_enable_trace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#agent_id GenerativeAiAgentAgentEndpoint#agent_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#compartment_id GenerativeAiAgentAgentEndpoint#compartment_id}.

---

##### `contentModerationConfig`<sup>Optional</sup> <a name="contentModerationConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.contentModerationConfig"></a>

```typescript
public readonly contentModerationConfig: GenerativeAiAgentAgentEndpointContentModerationConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a>

content_moderation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#content_moderation_config GenerativeAiAgentAgentEndpoint#content_moderation_config}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#defined_tags GenerativeAiAgentAgentEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#description GenerativeAiAgentAgentEndpoint#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#display_name GenerativeAiAgentAgentEndpoint#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#freeform_tags GenerativeAiAgentAgentEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#id GenerativeAiAgentAgentEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sessionConfig`<sup>Optional</sup> <a name="sessionConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.sessionConfig"></a>

```typescript
public readonly sessionConfig: GenerativeAiAgentAgentEndpointSessionConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a>

session_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#session_config GenerativeAiAgentAgentEndpoint#session_config}

---

##### `shouldEnableCitation`<sup>Optional</sup> <a name="shouldEnableCitation" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableCitation"></a>

```typescript
public readonly shouldEnableCitation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_citation GenerativeAiAgentAgentEndpoint#should_enable_citation}.

---

##### `shouldEnableSession`<sup>Optional</sup> <a name="shouldEnableSession" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableSession"></a>

```typescript
public readonly shouldEnableSession: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_session GenerativeAiAgentAgentEndpoint#should_enable_session}.

---

##### `shouldEnableTrace`<sup>Optional</sup> <a name="shouldEnableTrace" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableTrace"></a>

```typescript
public readonly shouldEnableTrace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_trace GenerativeAiAgentAgentEndpoint#should_enable_trace}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GenerativeAiAgentAgentEndpointTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#timeouts GenerativeAiAgentAgentEndpoint#timeouts}

---

### GenerativeAiAgentAgentEndpointContentModerationConfig <a name="GenerativeAiAgentAgentEndpointContentModerationConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.Initializer"></a>

```typescript
import { generativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

const generativeAiAgentAgentEndpointContentModerationConfig: generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.property.shouldEnableOnInput">shouldEnableOnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_input GenerativeAiAgentAgentEndpoint#should_enable_on_input}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.property.shouldEnableOnOutput">shouldEnableOnOutput</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_output GenerativeAiAgentAgentEndpoint#should_enable_on_output}. |

---

##### `shouldEnableOnInput`<sup>Optional</sup> <a name="shouldEnableOnInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.property.shouldEnableOnInput"></a>

```typescript
public readonly shouldEnableOnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_input GenerativeAiAgentAgentEndpoint#should_enable_on_input}.

---

##### `shouldEnableOnOutput`<sup>Optional</sup> <a name="shouldEnableOnOutput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.property.shouldEnableOnOutput"></a>

```typescript
public readonly shouldEnableOnOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_output GenerativeAiAgentAgentEndpoint#should_enable_on_output}.

---

### GenerativeAiAgentAgentEndpointSessionConfig <a name="GenerativeAiAgentAgentEndpointSessionConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig.Initializer"></a>

```typescript
import { generativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

const generativeAiAgentAgentEndpointSessionConfig: generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig.property.idleTimeoutInSeconds">idleTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#idle_timeout_in_seconds GenerativeAiAgentAgentEndpoint#idle_timeout_in_seconds}. |

---

##### `idleTimeoutInSeconds`<sup>Optional</sup> <a name="idleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig.property.idleTimeoutInSeconds"></a>

```typescript
public readonly idleTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#idle_timeout_in_seconds GenerativeAiAgentAgentEndpoint#idle_timeout_in_seconds}.

---

### GenerativeAiAgentAgentEndpointTimeouts <a name="GenerativeAiAgentAgentEndpointTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.Initializer"></a>

```typescript
import { generativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

const generativeAiAgentAgentEndpointTimeouts: generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#create GenerativeAiAgentAgentEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#delete GenerativeAiAgentAgentEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#update GenerativeAiAgentAgentEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#create GenerativeAiAgentAgentEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#delete GenerativeAiAgentAgentEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#update GenerativeAiAgentAgentEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference <a name="GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer"></a>

```typescript
import { generativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

new generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resetShouldEnableOnInput">resetShouldEnableOnInput</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resetShouldEnableOnOutput">resetShouldEnableOnOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetShouldEnableOnInput` <a name="resetShouldEnableOnInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resetShouldEnableOnInput"></a>

```typescript
public resetShouldEnableOnInput(): void
```

##### `resetShouldEnableOnOutput` <a name="resetShouldEnableOnOutput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resetShouldEnableOnOutput"></a>

```typescript
public resetShouldEnableOnOutput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInputInput">shouldEnableOnInputInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutputInput">shouldEnableOnOutputInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInput">shouldEnableOnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutput">shouldEnableOnOutput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shouldEnableOnInputInput`<sup>Optional</sup> <a name="shouldEnableOnInputInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInputInput"></a>

```typescript
public readonly shouldEnableOnInputInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldEnableOnOutputInput`<sup>Optional</sup> <a name="shouldEnableOnOutputInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutputInput"></a>

```typescript
public readonly shouldEnableOnOutputInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldEnableOnInput`<sup>Required</sup> <a name="shouldEnableOnInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInput"></a>

```typescript
public readonly shouldEnableOnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldEnableOnOutput`<sup>Required</sup> <a name="shouldEnableOnOutput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutput"></a>

```typescript
public readonly shouldEnableOnOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GenerativeAiAgentAgentEndpointContentModerationConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a>

---


### GenerativeAiAgentAgentEndpointSessionConfigOutputReference <a name="GenerativeAiAgentAgentEndpointSessionConfigOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer"></a>

```typescript
import { generativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

new generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resetIdleTimeoutInSeconds">resetIdleTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInSeconds` <a name="resetIdleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resetIdleTimeoutInSeconds"></a>

```typescript
public resetIdleTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSecondsInput">idleTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSeconds">idleTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInSecondsInput`<sup>Optional</sup> <a name="idleTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSecondsInput"></a>

```typescript
public readonly idleTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `idleTimeoutInSeconds`<sup>Required</sup> <a name="idleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSeconds"></a>

```typescript
public readonly idleTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GenerativeAiAgentAgentEndpointSessionConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a>

---


### GenerativeAiAgentAgentEndpointTimeoutsOutputReference <a name="GenerativeAiAgentAgentEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { generativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

new generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenerativeAiAgentAgentEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a>

---



