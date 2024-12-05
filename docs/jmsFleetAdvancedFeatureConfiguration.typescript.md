# `jmsFleetAdvancedFeatureConfiguration` Submodule <a name="`jmsFleetAdvancedFeatureConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JmsFleetAdvancedFeatureConfiguration <a name="JmsFleetAdvancedFeatureConfiguration" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration oci_jms_fleet_advanced_feature_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration(scope: Construct, id: string, config: JmsFleetAdvancedFeatureConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig">JmsFleetAdvancedFeatureConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig">JmsFleetAdvancedFeatureConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putAdvancedUsageTracking">putAdvancedUsageTracking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putCryptoEventAnalysis">putCryptoEventAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putJavaMigrationAnalysis">putJavaMigrationAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putJfrRecording">putJfrRecording</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putLcm">putLcm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putPerformanceTuningAnalysis">putPerformanceTuningAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetAdvancedUsageTracking">resetAdvancedUsageTracking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetAnalyticBucketName">resetAnalyticBucketName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetAnalyticNamespace">resetAnalyticNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetCryptoEventAnalysis">resetCryptoEventAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetJavaMigrationAnalysis">resetJavaMigrationAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetJfrRecording">resetJfrRecording</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetLcm">resetLcm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetPerformanceTuningAnalysis">resetPerformanceTuningAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedUsageTracking` <a name="putAdvancedUsageTracking" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putAdvancedUsageTracking"></a>

```typescript
public putAdvancedUsageTracking(value: JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putAdvancedUsageTracking.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a>

---

##### `putCryptoEventAnalysis` <a name="putCryptoEventAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putCryptoEventAnalysis"></a>

```typescript
public putCryptoEventAnalysis(value: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putCryptoEventAnalysis.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a>

---

##### `putJavaMigrationAnalysis` <a name="putJavaMigrationAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putJavaMigrationAnalysis"></a>

```typescript
public putJavaMigrationAnalysis(value: JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putJavaMigrationAnalysis.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a>

---

##### `putJfrRecording` <a name="putJfrRecording" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putJfrRecording"></a>

```typescript
public putJfrRecording(value: JmsFleetAdvancedFeatureConfigurationJfrRecording): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putJfrRecording.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a>

---

##### `putLcm` <a name="putLcm" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putLcm"></a>

```typescript
public putLcm(value: JmsFleetAdvancedFeatureConfigurationLcm): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putLcm.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a>

---

##### `putPerformanceTuningAnalysis` <a name="putPerformanceTuningAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putPerformanceTuningAnalysis"></a>

```typescript
public putPerformanceTuningAnalysis(value: JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putPerformanceTuningAnalysis.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: JmsFleetAdvancedFeatureConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts">JmsFleetAdvancedFeatureConfigurationTimeouts</a>

---

##### `resetAdvancedUsageTracking` <a name="resetAdvancedUsageTracking" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetAdvancedUsageTracking"></a>

```typescript
public resetAdvancedUsageTracking(): void
```

##### `resetAnalyticBucketName` <a name="resetAnalyticBucketName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetAnalyticBucketName"></a>

```typescript
public resetAnalyticBucketName(): void
```

##### `resetAnalyticNamespace` <a name="resetAnalyticNamespace" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetAnalyticNamespace"></a>

```typescript
public resetAnalyticNamespace(): void
```

##### `resetCryptoEventAnalysis` <a name="resetCryptoEventAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetCryptoEventAnalysis"></a>

```typescript
public resetCryptoEventAnalysis(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJavaMigrationAnalysis` <a name="resetJavaMigrationAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetJavaMigrationAnalysis"></a>

```typescript
public resetJavaMigrationAnalysis(): void
```

##### `resetJfrRecording` <a name="resetJfrRecording" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetJfrRecording"></a>

```typescript
public resetJfrRecording(): void
```

##### `resetLcm` <a name="resetLcm" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetLcm"></a>

```typescript
public resetLcm(): void
```

##### `resetPerformanceTuningAnalysis` <a name="resetPerformanceTuningAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetPerformanceTuningAnalysis"></a>

```typescript
public resetPerformanceTuningAnalysis(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a JmsFleetAdvancedFeatureConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isConstruct"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformElement"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformResource"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a JmsFleetAdvancedFeatureConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JmsFleetAdvancedFeatureConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JmsFleetAdvancedFeatureConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the JmsFleetAdvancedFeatureConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.advancedUsageTracking">advancedUsageTracking</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.cryptoEventAnalysis">cryptoEventAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.javaMigrationAnalysis">javaMigrationAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.jfrRecording">jfrRecording</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference">JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.lcm">lcm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference">JmsFleetAdvancedFeatureConfigurationLcmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.performanceTuningAnalysis">performanceTuningAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.timeLastModified">timeLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference">JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.advancedUsageTrackingInput">advancedUsageTrackingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticBucketNameInput">analyticBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticNamespaceInput">analyticNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.cryptoEventAnalysisInput">cryptoEventAnalysisInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.javaMigrationAnalysisInput">javaMigrationAnalysisInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.jfrRecordingInput">jfrRecordingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.lcmInput">lcmInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.performanceTuningAnalysisInput">performanceTuningAnalysisInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts">JmsFleetAdvancedFeatureConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticBucketName">analyticBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticNamespace">analyticNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedUsageTracking`<sup>Required</sup> <a name="advancedUsageTracking" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.advancedUsageTracking"></a>

```typescript
public readonly advancedUsageTracking: JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference</a>

---

##### `cryptoEventAnalysis`<sup>Required</sup> <a name="cryptoEventAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.cryptoEventAnalysis"></a>

```typescript
public readonly cryptoEventAnalysis: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference</a>

---

##### `javaMigrationAnalysis`<sup>Required</sup> <a name="javaMigrationAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.javaMigrationAnalysis"></a>

```typescript
public readonly javaMigrationAnalysis: JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference</a>

---

##### `jfrRecording`<sup>Required</sup> <a name="jfrRecording" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.jfrRecording"></a>

```typescript
public readonly jfrRecording: JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference">JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference</a>

---

##### `lcm`<sup>Required</sup> <a name="lcm" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.lcm"></a>

```typescript
public readonly lcm: JmsFleetAdvancedFeatureConfigurationLcmOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference">JmsFleetAdvancedFeatureConfigurationLcmOutputReference</a>

---

##### `performanceTuningAnalysis`<sup>Required</sup> <a name="performanceTuningAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.performanceTuningAnalysis"></a>

```typescript
public readonly performanceTuningAnalysis: JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference</a>

---

##### `timeLastModified`<sup>Required</sup> <a name="timeLastModified" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.timeLastModified"></a>

```typescript
public readonly timeLastModified: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference">JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference</a>

---

##### `advancedUsageTrackingInput`<sup>Optional</sup> <a name="advancedUsageTrackingInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.advancedUsageTrackingInput"></a>

```typescript
public readonly advancedUsageTrackingInput: JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a>

---

##### `analyticBucketNameInput`<sup>Optional</sup> <a name="analyticBucketNameInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticBucketNameInput"></a>

```typescript
public readonly analyticBucketNameInput: string;
```

- *Type:* string

---

##### `analyticNamespaceInput`<sup>Optional</sup> <a name="analyticNamespaceInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticNamespaceInput"></a>

```typescript
public readonly analyticNamespaceInput: string;
```

- *Type:* string

---

##### `cryptoEventAnalysisInput`<sup>Optional</sup> <a name="cryptoEventAnalysisInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.cryptoEventAnalysisInput"></a>

```typescript
public readonly cryptoEventAnalysisInput: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a>

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `javaMigrationAnalysisInput`<sup>Optional</sup> <a name="javaMigrationAnalysisInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.javaMigrationAnalysisInput"></a>

```typescript
public readonly javaMigrationAnalysisInput: JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a>

---

##### `jfrRecordingInput`<sup>Optional</sup> <a name="jfrRecordingInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.jfrRecordingInput"></a>

```typescript
public readonly jfrRecordingInput: JmsFleetAdvancedFeatureConfigurationJfrRecording;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a>

---

##### `lcmInput`<sup>Optional</sup> <a name="lcmInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.lcmInput"></a>

```typescript
public readonly lcmInput: JmsFleetAdvancedFeatureConfigurationLcm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a>

---

##### `performanceTuningAnalysisInput`<sup>Optional</sup> <a name="performanceTuningAnalysisInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.performanceTuningAnalysisInput"></a>

```typescript
public readonly performanceTuningAnalysisInput: JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | JmsFleetAdvancedFeatureConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts">JmsFleetAdvancedFeatureConfigurationTimeouts</a>

---

##### `analyticBucketName`<sup>Required</sup> <a name="analyticBucketName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticBucketName"></a>

```typescript
public readonly analyticBucketName: string;
```

- *Type:* string

---

##### `analyticNamespace`<sup>Required</sup> <a name="analyticNamespace" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticNamespace"></a>

```typescript
public readonly analyticNamespace: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking <a name="JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}.

---

### JmsFleetAdvancedFeatureConfigurationConfig <a name="JmsFleetAdvancedFeatureConfigurationConfig" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationConfig: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.fleetId">fleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#fleet_id JmsFleetAdvancedFeatureConfiguration#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.advancedUsageTracking">advancedUsageTracking</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a></code> | advanced_usage_tracking block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.analyticBucketName">analyticBucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#analytic_bucket_name JmsFleetAdvancedFeatureConfiguration#analytic_bucket_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.analyticNamespace">analyticNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#analytic_namespace JmsFleetAdvancedFeatureConfiguration#analytic_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.cryptoEventAnalysis">cryptoEventAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a></code> | crypto_event_analysis block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#id JmsFleetAdvancedFeatureConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.javaMigrationAnalysis">javaMigrationAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a></code> | java_migration_analysis block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.jfrRecording">jfrRecording</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a></code> | jfr_recording block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.lcm">lcm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a></code> | lcm block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.performanceTuningAnalysis">performanceTuningAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a></code> | performance_tuning_analysis block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts">JmsFleetAdvancedFeatureConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#fleet_id JmsFleetAdvancedFeatureConfiguration#fleet_id}.

---

##### `advancedUsageTracking`<sup>Optional</sup> <a name="advancedUsageTracking" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.advancedUsageTracking"></a>

```typescript
public readonly advancedUsageTracking: JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a>

advanced_usage_tracking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#advanced_usage_tracking JmsFleetAdvancedFeatureConfiguration#advanced_usage_tracking}

---

##### `analyticBucketName`<sup>Optional</sup> <a name="analyticBucketName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.analyticBucketName"></a>

```typescript
public readonly analyticBucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#analytic_bucket_name JmsFleetAdvancedFeatureConfiguration#analytic_bucket_name}.

---

##### `analyticNamespace`<sup>Optional</sup> <a name="analyticNamespace" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.analyticNamespace"></a>

```typescript
public readonly analyticNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#analytic_namespace JmsFleetAdvancedFeatureConfiguration#analytic_namespace}.

---

##### `cryptoEventAnalysis`<sup>Optional</sup> <a name="cryptoEventAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.cryptoEventAnalysis"></a>

```typescript
public readonly cryptoEventAnalysis: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a>

crypto_event_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#crypto_event_analysis JmsFleetAdvancedFeatureConfiguration#crypto_event_analysis}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#id JmsFleetAdvancedFeatureConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `javaMigrationAnalysis`<sup>Optional</sup> <a name="javaMigrationAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.javaMigrationAnalysis"></a>

```typescript
public readonly javaMigrationAnalysis: JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a>

java_migration_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#java_migration_analysis JmsFleetAdvancedFeatureConfiguration#java_migration_analysis}

---

##### `jfrRecording`<sup>Optional</sup> <a name="jfrRecording" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.jfrRecording"></a>

```typescript
public readonly jfrRecording: JmsFleetAdvancedFeatureConfigurationJfrRecording;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a>

jfr_recording block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#jfr_recording JmsFleetAdvancedFeatureConfiguration#jfr_recording}

---

##### `lcm`<sup>Optional</sup> <a name="lcm" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.lcm"></a>

```typescript
public readonly lcm: JmsFleetAdvancedFeatureConfigurationLcm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a>

lcm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#lcm JmsFleetAdvancedFeatureConfiguration#lcm}

---

##### `performanceTuningAnalysis`<sup>Optional</sup> <a name="performanceTuningAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.performanceTuningAnalysis"></a>

```typescript
public readonly performanceTuningAnalysis: JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a>

performance_tuning_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#performance_tuning_analysis JmsFleetAdvancedFeatureConfiguration#performance_tuning_analysis}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: JmsFleetAdvancedFeatureConfigurationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts">JmsFleetAdvancedFeatureConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#timeouts JmsFleetAdvancedFeatureConfiguration#timeouts}

---

### JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis <a name="JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis.property.summarizedEventsLog">summarizedEventsLog</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a></code> | summarized_events_log block. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}.

---

##### `summarizedEventsLog`<sup>Optional</sup> <a name="summarizedEventsLog" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis.property.summarizedEventsLog"></a>

```typescript
public readonly summarizedEventsLog: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a>

summarized_events_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#summarized_events_log JmsFleetAdvancedFeatureConfiguration#summarized_events_log}

---

### JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog <a name="JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog.property.logGroupId">logGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#log_group_id JmsFleetAdvancedFeatureConfiguration#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog.property.logId">logId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#log_id JmsFleetAdvancedFeatureConfiguration#log_id}. |

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#log_group_id JmsFleetAdvancedFeatureConfiguration#log_group_id}.

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#log_id JmsFleetAdvancedFeatureConfiguration#log_id}.

---

### JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis <a name="JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}.

---

### JmsFleetAdvancedFeatureConfigurationJfrRecording <a name="JmsFleetAdvancedFeatureConfigurationJfrRecording" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationJfrRecording: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}.

---

### JmsFleetAdvancedFeatureConfigurationLcm <a name="JmsFleetAdvancedFeatureConfigurationLcm" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationLcm: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm.property.postInstallationActions">postInstallationActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a></code> | post_installation_actions block. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}.

---

##### `postInstallationActions`<sup>Optional</sup> <a name="postInstallationActions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm.property.postInstallationActions"></a>

```typescript
public readonly postInstallationActions: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a>

post_installation_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#post_installation_actions JmsFleetAdvancedFeatureConfiguration#post_installation_actions}

---

### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.addLoggingHandler">addLoggingHandler</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#add_logging_handler JmsFleetAdvancedFeatureConfiguration#add_logging_handler}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.disabledTlsVersions">disabledTlsVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#disabled_tls_versions JmsFleetAdvancedFeatureConfiguration#disabled_tls_versions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.globalLoggingLevel">globalLoggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#global_logging_level JmsFleetAdvancedFeatureConfiguration#global_logging_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.minimumKeySizeSettings">minimumKeySizeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a></code> | minimum_key_size_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.proxies">proxies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a></code> | proxies block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.shouldReplaceCertificatesOperatingSystem">shouldReplaceCertificatesOperatingSystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#should_replace_certificates_operating_system JmsFleetAdvancedFeatureConfiguration#should_replace_certificates_operating_system}. |

---

##### `addLoggingHandler`<sup>Optional</sup> <a name="addLoggingHandler" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.addLoggingHandler"></a>

```typescript
public readonly addLoggingHandler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#add_logging_handler JmsFleetAdvancedFeatureConfiguration#add_logging_handler}.

---

##### `disabledTlsVersions`<sup>Optional</sup> <a name="disabledTlsVersions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.disabledTlsVersions"></a>

```typescript
public readonly disabledTlsVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#disabled_tls_versions JmsFleetAdvancedFeatureConfiguration#disabled_tls_versions}.

---

##### `globalLoggingLevel`<sup>Optional</sup> <a name="globalLoggingLevel" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.globalLoggingLevel"></a>

```typescript
public readonly globalLoggingLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#global_logging_level JmsFleetAdvancedFeatureConfiguration#global_logging_level}.

---

##### `minimumKeySizeSettings`<sup>Optional</sup> <a name="minimumKeySizeSettings" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.minimumKeySizeSettings"></a>

```typescript
public readonly minimumKeySizeSettings: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a>

minimum_key_size_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#minimum_key_size_settings JmsFleetAdvancedFeatureConfiguration#minimum_key_size_settings}

---

##### `proxies`<sup>Optional</sup> <a name="proxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.proxies"></a>

```typescript
public readonly proxies: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a>

proxies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#proxies JmsFleetAdvancedFeatureConfiguration#proxies}

---

##### `shouldReplaceCertificatesOperatingSystem`<sup>Optional</sup> <a name="shouldReplaceCertificatesOperatingSystem" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.shouldReplaceCertificatesOperatingSystem"></a>

```typescript
public readonly shouldReplaceCertificatesOperatingSystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#should_replace_certificates_operating_system JmsFleetAdvancedFeatureConfiguration#should_replace_certificates_operating_system}.

---

### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.property.certpath">certpath</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath</a>[]</code> | certpath block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.property.jar">jar</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar</a>[]</code> | jar block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.property.tls">tls</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls</a>[]</code> | tls block. |

---

##### `certpath`<sup>Optional</sup> <a name="certpath" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.property.certpath"></a>

```typescript
public readonly certpath: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath</a>[]

certpath block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#certpath JmsFleetAdvancedFeatureConfiguration#certpath}

---

##### `jar`<sup>Optional</sup> <a name="jar" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.property.jar"></a>

```typescript
public readonly jar: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar</a>[]

jar block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#jar JmsFleetAdvancedFeatureConfiguration#jar}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.property.tls"></a>

```typescript
public readonly tls: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls</a>[]

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#tls JmsFleetAdvancedFeatureConfiguration#tls}

---

### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath.property.keySize">keySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}. |

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}.

---

### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar.property.keySize">keySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}. |

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}.

---

### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls.property.keySize">keySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}. |

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}.

---

### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.ftpProxyHost">ftpProxyHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#ftp_proxy_host JmsFleetAdvancedFeatureConfiguration#ftp_proxy_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.ftpProxyPort">ftpProxyPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#ftp_proxy_port JmsFleetAdvancedFeatureConfiguration#ftp_proxy_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpProxyHost">httpProxyHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#http_proxy_host JmsFleetAdvancedFeatureConfiguration#http_proxy_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpProxyPort">httpProxyPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#http_proxy_port JmsFleetAdvancedFeatureConfiguration#http_proxy_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpsProxyHost">httpsProxyHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#https_proxy_host JmsFleetAdvancedFeatureConfiguration#https_proxy_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpsProxyPort">httpsProxyPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#https_proxy_port JmsFleetAdvancedFeatureConfiguration#https_proxy_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.socksProxyHost">socksProxyHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#socks_proxy_host JmsFleetAdvancedFeatureConfiguration#socks_proxy_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.socksProxyPort">socksProxyPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#socks_proxy_port JmsFleetAdvancedFeatureConfiguration#socks_proxy_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.useSystemProxies">useSystemProxies</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#use_system_proxies JmsFleetAdvancedFeatureConfiguration#use_system_proxies}. |

---

##### `ftpProxyHost`<sup>Optional</sup> <a name="ftpProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.ftpProxyHost"></a>

```typescript
public readonly ftpProxyHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#ftp_proxy_host JmsFleetAdvancedFeatureConfiguration#ftp_proxy_host}.

---

##### `ftpProxyPort`<sup>Optional</sup> <a name="ftpProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.ftpProxyPort"></a>

```typescript
public readonly ftpProxyPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#ftp_proxy_port JmsFleetAdvancedFeatureConfiguration#ftp_proxy_port}.

---

##### `httpProxyHost`<sup>Optional</sup> <a name="httpProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpProxyHost"></a>

```typescript
public readonly httpProxyHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#http_proxy_host JmsFleetAdvancedFeatureConfiguration#http_proxy_host}.

---

##### `httpProxyPort`<sup>Optional</sup> <a name="httpProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpProxyPort"></a>

```typescript
public readonly httpProxyPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#http_proxy_port JmsFleetAdvancedFeatureConfiguration#http_proxy_port}.

---

##### `httpsProxyHost`<sup>Optional</sup> <a name="httpsProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpsProxyHost"></a>

```typescript
public readonly httpsProxyHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#https_proxy_host JmsFleetAdvancedFeatureConfiguration#https_proxy_host}.

---

##### `httpsProxyPort`<sup>Optional</sup> <a name="httpsProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpsProxyPort"></a>

```typescript
public readonly httpsProxyPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#https_proxy_port JmsFleetAdvancedFeatureConfiguration#https_proxy_port}.

---

##### `socksProxyHost`<sup>Optional</sup> <a name="socksProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.socksProxyHost"></a>

```typescript
public readonly socksProxyHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#socks_proxy_host JmsFleetAdvancedFeatureConfiguration#socks_proxy_host}.

---

##### `socksProxyPort`<sup>Optional</sup> <a name="socksProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.socksProxyPort"></a>

```typescript
public readonly socksProxyPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#socks_proxy_port JmsFleetAdvancedFeatureConfiguration#socks_proxy_port}.

---

##### `useSystemProxies`<sup>Optional</sup> <a name="useSystemProxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.useSystemProxies"></a>

```typescript
public readonly useSystemProxies: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#use_system_proxies JmsFleetAdvancedFeatureConfiguration#use_system_proxies}.

---

### JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis <a name="JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}.

---

### JmsFleetAdvancedFeatureConfigurationTimeouts <a name="JmsFleetAdvancedFeatureConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

const jmsFleetAdvancedFeatureConfigurationTimeouts: jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#create JmsFleetAdvancedFeatureConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#delete JmsFleetAdvancedFeatureConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#update JmsFleetAdvancedFeatureConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#create JmsFleetAdvancedFeatureConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#delete JmsFleetAdvancedFeatureConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#update JmsFleetAdvancedFeatureConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference <a name="JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a>

---


### JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference <a name="JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.putSummarizedEventsLog">putSummarizedEventsLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resetSummarizedEventsLog">resetSummarizedEventsLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSummarizedEventsLog` <a name="putSummarizedEventsLog" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.putSummarizedEventsLog"></a>

```typescript
public putSummarizedEventsLog(value: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.putSummarizedEventsLog.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a>

---

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetSummarizedEventsLog` <a name="resetSummarizedEventsLog" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resetSummarizedEventsLog"></a>

```typescript
public resetSummarizedEventsLog(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.summarizedEventsLog">summarizedEventsLog</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.summarizedEventsLogInput">summarizedEventsLogInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `summarizedEventsLog`<sup>Required</sup> <a name="summarizedEventsLog" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.summarizedEventsLog"></a>

```typescript
public readonly summarizedEventsLog: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference</a>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `summarizedEventsLogInput`<sup>Optional</sup> <a name="summarizedEventsLogInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.summarizedEventsLogInput"></a>

```typescript
public readonly summarizedEventsLogInput: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a>

---


### JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference <a name="JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logIdInput">logIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logGroupIdInput"></a>

```typescript
public readonly logGroupIdInput: string;
```

- *Type:* string

---

##### `logIdInput`<sup>Optional</sup> <a name="logIdInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logIdInput"></a>

```typescript
public readonly logIdInput: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a>

---


### JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference <a name="JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a>

---


### JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference <a name="JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsFleetAdvancedFeatureConfigurationJfrRecording;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a>

---


### JmsFleetAdvancedFeatureConfigurationLcmOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.putPostInstallationActions">putPostInstallationActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resetPostInstallationActions">resetPostInstallationActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostInstallationActions` <a name="putPostInstallationActions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.putPostInstallationActions"></a>

```typescript
public putPostInstallationActions(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.putPostInstallationActions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a>

---

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetPostInstallationActions` <a name="resetPostInstallationActions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resetPostInstallationActions"></a>

```typescript
public resetPostInstallationActions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.postInstallationActions">postInstallationActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.postInstallationActionsInput">postInstallationActionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postInstallationActions`<sup>Required</sup> <a name="postInstallationActions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.postInstallationActions"></a>

```typescript
public readonly postInstallationActions: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference</a>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `postInstallationActionsInput`<sup>Optional</sup> <a name="postInstallationActionsInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.postInstallationActionsInput"></a>

```typescript
public readonly postInstallationActionsInput: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsFleetAdvancedFeatureConfigurationLcm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a>

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.get"></a>

```typescript
public get(index: number): JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath</a>[]

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeySize` <a name="resetKeySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resetKeySize"></a>

```typescript
public resetKeySize(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.keySizeInput">keySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.keySize">keySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.keySizeInput"></a>

```typescript
public readonly keySizeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath</a>

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.get"></a>

```typescript
public get(index: number): JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar</a>[]

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeySize` <a name="resetKeySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resetKeySize"></a>

```typescript
public resetKeySize(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.keySizeInput">keySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.keySize">keySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.keySizeInput"></a>

```typescript
public readonly keySizeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar</a>

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putCertpath">putCertpath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putJar">putJar</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putTls">putTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resetCertpath">resetCertpath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resetJar">resetJar</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resetTls">resetTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertpath` <a name="putCertpath" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putCertpath"></a>

```typescript
public putCertpath(value: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putCertpath.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath</a>[]

---

##### `putJar` <a name="putJar" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putJar"></a>

```typescript
public putJar(value: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putJar.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar</a>[]

---

##### `putTls` <a name="putTls" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putTls"></a>

```typescript
public putTls(value: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putTls.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls</a>[]

---

##### `resetCertpath` <a name="resetCertpath" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resetCertpath"></a>

```typescript
public resetCertpath(): void
```

##### `resetJar` <a name="resetJar" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resetJar"></a>

```typescript
public resetJar(): void
```

##### `resetTls` <a name="resetTls" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.certpath">certpath</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.jar">jar</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.tls">tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.certpathInput">certpathInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.jarInput">jarInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.tlsInput">tlsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certpath`<sup>Required</sup> <a name="certpath" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.certpath"></a>

```typescript
public readonly certpath: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList</a>

---

##### `jar`<sup>Required</sup> <a name="jar" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.jar"></a>

```typescript
public readonly jar: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.tls"></a>

```typescript
public readonly tls: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList</a>

---

##### `certpathInput`<sup>Optional</sup> <a name="certpathInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.certpathInput"></a>

```typescript
public readonly certpathInput: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath</a>[]

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.jarInput"></a>

```typescript
public readonly jarInput: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar</a>[]

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a>

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.get"></a>

```typescript
public get(index: number): JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls</a>[]

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeySize` <a name="resetKeySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resetKeySize"></a>

```typescript
public resetKeySize(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.keySizeInput">keySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.keySize">keySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.keySizeInput"></a>

```typescript
public readonly keySizeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls</a>

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.putMinimumKeySizeSettings">putMinimumKeySizeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.putProxies">putProxies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetAddLoggingHandler">resetAddLoggingHandler</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetDisabledTlsVersions">resetDisabledTlsVersions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetGlobalLoggingLevel">resetGlobalLoggingLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetMinimumKeySizeSettings">resetMinimumKeySizeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetProxies">resetProxies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetShouldReplaceCertificatesOperatingSystem">resetShouldReplaceCertificatesOperatingSystem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMinimumKeySizeSettings` <a name="putMinimumKeySizeSettings" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.putMinimumKeySizeSettings"></a>

```typescript
public putMinimumKeySizeSettings(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.putMinimumKeySizeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a>

---

##### `putProxies` <a name="putProxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.putProxies"></a>

```typescript
public putProxies(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.putProxies.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a>

---

##### `resetAddLoggingHandler` <a name="resetAddLoggingHandler" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetAddLoggingHandler"></a>

```typescript
public resetAddLoggingHandler(): void
```

##### `resetDisabledTlsVersions` <a name="resetDisabledTlsVersions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetDisabledTlsVersions"></a>

```typescript
public resetDisabledTlsVersions(): void
```

##### `resetGlobalLoggingLevel` <a name="resetGlobalLoggingLevel" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetGlobalLoggingLevel"></a>

```typescript
public resetGlobalLoggingLevel(): void
```

##### `resetMinimumKeySizeSettings` <a name="resetMinimumKeySizeSettings" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetMinimumKeySizeSettings"></a>

```typescript
public resetMinimumKeySizeSettings(): void
```

##### `resetProxies` <a name="resetProxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetProxies"></a>

```typescript
public resetProxies(): void
```

##### `resetShouldReplaceCertificatesOperatingSystem` <a name="resetShouldReplaceCertificatesOperatingSystem" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetShouldReplaceCertificatesOperatingSystem"></a>

```typescript
public resetShouldReplaceCertificatesOperatingSystem(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.minimumKeySizeSettings">minimumKeySizeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.proxies">proxies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.addLoggingHandlerInput">addLoggingHandlerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.disabledTlsVersionsInput">disabledTlsVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.globalLoggingLevelInput">globalLoggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.minimumKeySizeSettingsInput">minimumKeySizeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.proxiesInput">proxiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.shouldReplaceCertificatesOperatingSystemInput">shouldReplaceCertificatesOperatingSystemInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.addLoggingHandler">addLoggingHandler</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.disabledTlsVersions">disabledTlsVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.globalLoggingLevel">globalLoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.shouldReplaceCertificatesOperatingSystem">shouldReplaceCertificatesOperatingSystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minimumKeySizeSettings`<sup>Required</sup> <a name="minimumKeySizeSettings" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.minimumKeySizeSettings"></a>

```typescript
public readonly minimumKeySizeSettings: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference</a>

---

##### `proxies`<sup>Required</sup> <a name="proxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.proxies"></a>

```typescript
public readonly proxies: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference</a>

---

##### `addLoggingHandlerInput`<sup>Optional</sup> <a name="addLoggingHandlerInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.addLoggingHandlerInput"></a>

```typescript
public readonly addLoggingHandlerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disabledTlsVersionsInput`<sup>Optional</sup> <a name="disabledTlsVersionsInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.disabledTlsVersionsInput"></a>

```typescript
public readonly disabledTlsVersionsInput: string[];
```

- *Type:* string[]

---

##### `globalLoggingLevelInput`<sup>Optional</sup> <a name="globalLoggingLevelInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.globalLoggingLevelInput"></a>

```typescript
public readonly globalLoggingLevelInput: string;
```

- *Type:* string

---

##### `minimumKeySizeSettingsInput`<sup>Optional</sup> <a name="minimumKeySizeSettingsInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.minimumKeySizeSettingsInput"></a>

```typescript
public readonly minimumKeySizeSettingsInput: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a>

---

##### `proxiesInput`<sup>Optional</sup> <a name="proxiesInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.proxiesInput"></a>

```typescript
public readonly proxiesInput: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a>

---

##### `shouldReplaceCertificatesOperatingSystemInput`<sup>Optional</sup> <a name="shouldReplaceCertificatesOperatingSystemInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.shouldReplaceCertificatesOperatingSystemInput"></a>

```typescript
public readonly shouldReplaceCertificatesOperatingSystemInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `addLoggingHandler`<sup>Required</sup> <a name="addLoggingHandler" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.addLoggingHandler"></a>

```typescript
public readonly addLoggingHandler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disabledTlsVersions`<sup>Required</sup> <a name="disabledTlsVersions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.disabledTlsVersions"></a>

```typescript
public readonly disabledTlsVersions: string[];
```

- *Type:* string[]

---

##### `globalLoggingLevel`<sup>Required</sup> <a name="globalLoggingLevel" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.globalLoggingLevel"></a>

```typescript
public readonly globalLoggingLevel: string;
```

- *Type:* string

---

##### `shouldReplaceCertificatesOperatingSystem`<sup>Required</sup> <a name="shouldReplaceCertificatesOperatingSystem" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.shouldReplaceCertificatesOperatingSystem"></a>

```typescript
public readonly shouldReplaceCertificatesOperatingSystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a>

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetFtpProxyHost">resetFtpProxyHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetFtpProxyPort">resetFtpProxyPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpProxyHost">resetHttpProxyHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpProxyPort">resetHttpProxyPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpsProxyHost">resetHttpsProxyHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpsProxyPort">resetHttpsProxyPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetSocksProxyHost">resetSocksProxyHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetSocksProxyPort">resetSocksProxyPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetUseSystemProxies">resetUseSystemProxies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFtpProxyHost` <a name="resetFtpProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetFtpProxyHost"></a>

```typescript
public resetFtpProxyHost(): void
```

##### `resetFtpProxyPort` <a name="resetFtpProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetFtpProxyPort"></a>

```typescript
public resetFtpProxyPort(): void
```

##### `resetHttpProxyHost` <a name="resetHttpProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpProxyHost"></a>

```typescript
public resetHttpProxyHost(): void
```

##### `resetHttpProxyPort` <a name="resetHttpProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpProxyPort"></a>

```typescript
public resetHttpProxyPort(): void
```

##### `resetHttpsProxyHost` <a name="resetHttpsProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpsProxyHost"></a>

```typescript
public resetHttpsProxyHost(): void
```

##### `resetHttpsProxyPort` <a name="resetHttpsProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpsProxyPort"></a>

```typescript
public resetHttpsProxyPort(): void
```

##### `resetSocksProxyHost` <a name="resetSocksProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetSocksProxyHost"></a>

```typescript
public resetSocksProxyHost(): void
```

##### `resetSocksProxyPort` <a name="resetSocksProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetSocksProxyPort"></a>

```typescript
public resetSocksProxyPort(): void
```

##### `resetUseSystemProxies` <a name="resetUseSystemProxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetUseSystemProxies"></a>

```typescript
public resetUseSystemProxies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyHostInput">ftpProxyHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyPortInput">ftpProxyPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyHostInput">httpProxyHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyPortInput">httpProxyPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyHostInput">httpsProxyHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyPortInput">httpsProxyPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyHostInput">socksProxyHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyPortInput">socksProxyPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.useSystemProxiesInput">useSystemProxiesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyHost">ftpProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyPort">ftpProxyPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyHost">httpProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyPort">httpProxyPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyHost">httpsProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyPort">httpsProxyPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyHost">socksProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyPort">socksProxyPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.useSystemProxies">useSystemProxies</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ftpProxyHostInput`<sup>Optional</sup> <a name="ftpProxyHostInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyHostInput"></a>

```typescript
public readonly ftpProxyHostInput: string;
```

- *Type:* string

---

##### `ftpProxyPortInput`<sup>Optional</sup> <a name="ftpProxyPortInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyPortInput"></a>

```typescript
public readonly ftpProxyPortInput: number;
```

- *Type:* number

---

##### `httpProxyHostInput`<sup>Optional</sup> <a name="httpProxyHostInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyHostInput"></a>

```typescript
public readonly httpProxyHostInput: string;
```

- *Type:* string

---

##### `httpProxyPortInput`<sup>Optional</sup> <a name="httpProxyPortInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyPortInput"></a>

```typescript
public readonly httpProxyPortInput: number;
```

- *Type:* number

---

##### `httpsProxyHostInput`<sup>Optional</sup> <a name="httpsProxyHostInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyHostInput"></a>

```typescript
public readonly httpsProxyHostInput: string;
```

- *Type:* string

---

##### `httpsProxyPortInput`<sup>Optional</sup> <a name="httpsProxyPortInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyPortInput"></a>

```typescript
public readonly httpsProxyPortInput: number;
```

- *Type:* number

---

##### `socksProxyHostInput`<sup>Optional</sup> <a name="socksProxyHostInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyHostInput"></a>

```typescript
public readonly socksProxyHostInput: string;
```

- *Type:* string

---

##### `socksProxyPortInput`<sup>Optional</sup> <a name="socksProxyPortInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyPortInput"></a>

```typescript
public readonly socksProxyPortInput: number;
```

- *Type:* number

---

##### `useSystemProxiesInput`<sup>Optional</sup> <a name="useSystemProxiesInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.useSystemProxiesInput"></a>

```typescript
public readonly useSystemProxiesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ftpProxyHost`<sup>Required</sup> <a name="ftpProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyHost"></a>

```typescript
public readonly ftpProxyHost: string;
```

- *Type:* string

---

##### `ftpProxyPort`<sup>Required</sup> <a name="ftpProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyPort"></a>

```typescript
public readonly ftpProxyPort: number;
```

- *Type:* number

---

##### `httpProxyHost`<sup>Required</sup> <a name="httpProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyHost"></a>

```typescript
public readonly httpProxyHost: string;
```

- *Type:* string

---

##### `httpProxyPort`<sup>Required</sup> <a name="httpProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyPort"></a>

```typescript
public readonly httpProxyPort: number;
```

- *Type:* number

---

##### `httpsProxyHost`<sup>Required</sup> <a name="httpsProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyHost"></a>

```typescript
public readonly httpsProxyHost: string;
```

- *Type:* string

---

##### `httpsProxyPort`<sup>Required</sup> <a name="httpsProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyPort"></a>

```typescript
public readonly httpsProxyPort: number;
```

- *Type:* number

---

##### `socksProxyHost`<sup>Required</sup> <a name="socksProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyHost"></a>

```typescript
public readonly socksProxyHost: string;
```

- *Type:* string

---

##### `socksProxyPort`<sup>Required</sup> <a name="socksProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyPort"></a>

```typescript
public readonly socksProxyPort: number;
```

- *Type:* number

---

##### `useSystemProxies`<sup>Required</sup> <a name="useSystemProxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.useSystemProxies"></a>

```typescript
public readonly useSystemProxies: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a>

---


### JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference <a name="JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a>

---


### JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference <a name="JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { jmsFleetAdvancedFeatureConfiguration } from 'rhizo-co-terraform-provider-oci'

new jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts">JmsFleetAdvancedFeatureConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JmsFleetAdvancedFeatureConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts">JmsFleetAdvancedFeatureConfigurationTimeouts</a>

---



