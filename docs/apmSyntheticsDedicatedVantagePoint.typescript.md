# `apmSyntheticsDedicatedVantagePoint` Submodule <a name="`apmSyntheticsDedicatedVantagePoint` Submodule" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmSyntheticsDedicatedVantagePoint <a name="ApmSyntheticsDedicatedVantagePoint" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point oci_apm_synthetics_dedicated_vantage_point}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint(scope: Construct, id: string, config: ApmSyntheticsDedicatedVantagePointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig">ApmSyntheticsDedicatedVantagePointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig">ApmSyntheticsDedicatedVantagePointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putDvpStackDetails">putDvpStackDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDvpStackDetails` <a name="putDvpStackDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putDvpStackDetails"></a>

```typescript
public putDvpStackDetails(value: ApmSyntheticsDedicatedVantagePointDvpStackDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putDvpStackDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putTimeouts"></a>

```typescript
public putTimeouts(value: ApmSyntheticsDedicatedVantagePointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApmSyntheticsDedicatedVantagePoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isConstruct"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformElement"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformResource"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApmSyntheticsDedicatedVantagePoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApmSyntheticsDedicatedVantagePoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApmSyntheticsDedicatedVantagePoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApmSyntheticsDedicatedVantagePoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dvpStackDetails">dvpStackDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference">ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.monitorStatusCountMap">monitorStatusCountMap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList">ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference">ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dvpStackDetailsInput">dvpStackDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dvpStackDetails`<sup>Required</sup> <a name="dvpStackDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dvpStackDetails"></a>

```typescript
public readonly dvpStackDetails: ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference">ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference</a>

---

##### `monitorStatusCountMap`<sup>Required</sup> <a name="monitorStatusCountMap" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.monitorStatusCountMap"></a>

```typescript
public readonly monitorStatusCountMap: ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList">ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeouts"></a>

```typescript
public readonly timeouts: ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference">ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `dvpStackDetailsInput`<sup>Optional</sup> <a name="dvpStackDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dvpStackDetailsInput"></a>

```typescript
public readonly dvpStackDetailsInput: ApmSyntheticsDedicatedVantagePointDvpStackDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApmSyntheticsDedicatedVantagePointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApmSyntheticsDedicatedVantagePointConfig <a name="ApmSyntheticsDedicatedVantagePointConfig" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.Initializer"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsDedicatedVantagePointConfig: apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#apm_domain_id ApmSyntheticsDedicatedVantagePoint#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#display_name ApmSyntheticsDedicatedVantagePoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.dvpStackDetails">dvpStackDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a></code> | dvp_stack_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#region ApmSyntheticsDedicatedVantagePoint#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#defined_tags ApmSyntheticsDedicatedVantagePoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#freeform_tags ApmSyntheticsDedicatedVantagePoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#id ApmSyntheticsDedicatedVantagePoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#status ApmSyntheticsDedicatedVantagePoint#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#apm_domain_id ApmSyntheticsDedicatedVantagePoint#apm_domain_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#display_name ApmSyntheticsDedicatedVantagePoint#display_name}.

---

##### `dvpStackDetails`<sup>Required</sup> <a name="dvpStackDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.dvpStackDetails"></a>

```typescript
public readonly dvpStackDetails: ApmSyntheticsDedicatedVantagePointDvpStackDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

dvp_stack_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_details ApmSyntheticsDedicatedVantagePoint#dvp_stack_details}

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#region ApmSyntheticsDedicatedVantagePoint#region}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#defined_tags ApmSyntheticsDedicatedVantagePoint#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#freeform_tags ApmSyntheticsDedicatedVantagePoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#id ApmSyntheticsDedicatedVantagePoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#status ApmSyntheticsDedicatedVantagePoint#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApmSyntheticsDedicatedVantagePointTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#timeouts ApmSyntheticsDedicatedVantagePoint#timeouts}

---

### ApmSyntheticsDedicatedVantagePointDvpStackDetails <a name="ApmSyntheticsDedicatedVantagePointDvpStackDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.Initializer"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsDedicatedVantagePointDvpStackDetails: apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStackId">dvpStackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_id ApmSyntheticsDedicatedVantagePoint#dvp_stack_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStackType">dvpStackType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_type ApmSyntheticsDedicatedVantagePoint#dvp_stack_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStreamId">dvpStreamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stream_id ApmSyntheticsDedicatedVantagePoint#dvp_stream_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpVersion">dvpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_version ApmSyntheticsDedicatedVantagePoint#dvp_version}. |

---

##### `dvpStackId`<sup>Required</sup> <a name="dvpStackId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStackId"></a>

```typescript
public readonly dvpStackId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_id ApmSyntheticsDedicatedVantagePoint#dvp_stack_id}.

---

##### `dvpStackType`<sup>Required</sup> <a name="dvpStackType" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStackType"></a>

```typescript
public readonly dvpStackType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_type ApmSyntheticsDedicatedVantagePoint#dvp_stack_type}.

---

##### `dvpStreamId`<sup>Required</sup> <a name="dvpStreamId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStreamId"></a>

```typescript
public readonly dvpStreamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stream_id ApmSyntheticsDedicatedVantagePoint#dvp_stream_id}.

---

##### `dvpVersion`<sup>Required</sup> <a name="dvpVersion" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpVersion"></a>

```typescript
public readonly dvpVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_version ApmSyntheticsDedicatedVantagePoint#dvp_version}.

---

### ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap <a name="ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap.Initializer"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsDedicatedVantagePointMonitorStatusCountMap: apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap = { ... }
```


### ApmSyntheticsDedicatedVantagePointTimeouts <a name="ApmSyntheticsDedicatedVantagePointTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.Initializer"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsDedicatedVantagePointTimeouts: apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#create ApmSyntheticsDedicatedVantagePoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#delete ApmSyntheticsDedicatedVantagePoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#update ApmSyntheticsDedicatedVantagePoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#create ApmSyntheticsDedicatedVantagePoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#delete ApmSyntheticsDedicatedVantagePoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#update ApmSyntheticsDedicatedVantagePoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference <a name="ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackIdInput">dvpStackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackTypeInput">dvpStackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamIdInput">dvpStreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersionInput">dvpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackId">dvpStackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackType">dvpStackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamId">dvpStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersion">dvpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dvpStackIdInput`<sup>Optional</sup> <a name="dvpStackIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackIdInput"></a>

```typescript
public readonly dvpStackIdInput: string;
```

- *Type:* string

---

##### `dvpStackTypeInput`<sup>Optional</sup> <a name="dvpStackTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackTypeInput"></a>

```typescript
public readonly dvpStackTypeInput: string;
```

- *Type:* string

---

##### `dvpStreamIdInput`<sup>Optional</sup> <a name="dvpStreamIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamIdInput"></a>

```typescript
public readonly dvpStreamIdInput: string;
```

- *Type:* string

---

##### `dvpVersionInput`<sup>Optional</sup> <a name="dvpVersionInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersionInput"></a>

```typescript
public readonly dvpVersionInput: string;
```

- *Type:* string

---

##### `dvpStackId`<sup>Required</sup> <a name="dvpStackId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackId"></a>

```typescript
public readonly dvpStackId: string;
```

- *Type:* string

---

##### `dvpStackType`<sup>Required</sup> <a name="dvpStackType" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackType"></a>

```typescript
public readonly dvpStackType: string;
```

- *Type:* string

---

##### `dvpStreamId`<sup>Required</sup> <a name="dvpStreamId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamId"></a>

```typescript
public readonly dvpStreamId: string;
```

- *Type:* string

---

##### `dvpVersion`<sup>Required</sup> <a name="dvpVersion" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersion"></a>

```typescript
public readonly dvpVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsDedicatedVantagePointDvpStackDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

---


### ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList <a name="ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.get"></a>

```typescript
public get(index: number): ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference <a name="ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.disabled">disabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.enabled">enabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.invalid">invalid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.total">total</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap">ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.disabled"></a>

```typescript
public readonly disabled: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.enabled"></a>

```typescript
public readonly enabled: number;
```

- *Type:* number

---

##### `invalid`<sup>Required</sup> <a name="invalid" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.invalid"></a>

```typescript
public readonly invalid: number;
```

- *Type:* number

---

##### `total`<sup>Required</sup> <a name="total" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.total"></a>

```typescript
public readonly total: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap">ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap</a>

---


### ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference <a name="ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsDedicatedVantagePoint } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsDedicatedVantagePointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a>

---



