# `apmSyntheticsOnPremiseVantagePoint` Submodule <a name="`apmSyntheticsOnPremiseVantagePoint` Submodule" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmSyntheticsOnPremiseVantagePoint <a name="ApmSyntheticsOnPremiseVantagePoint" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point oci_apm_synthetics_on_premise_vantage_point}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint(scope: Construct, id: string, config: ApmSyntheticsOnPremiseVantagePointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig">ApmSyntheticsOnPremiseVantagePointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig">ApmSyntheticsOnPremiseVantagePointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.putTimeouts"></a>

```typescript
public putTimeouts(value: ApmSyntheticsOnPremiseVantagePointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts">ApmSyntheticsOnPremiseVantagePointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isConstruct"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformElement"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformResource"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApmSyntheticsOnPremiseVantagePoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApmSyntheticsOnPremiseVantagePoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApmSyntheticsOnPremiseVantagePoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference">ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.workersSummary">workersSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList">ApmSyntheticsOnPremiseVantagePointWorkersSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts">ApmSyntheticsOnPremiseVantagePointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeouts"></a>

```typescript
public readonly timeouts: ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference">ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `workersSummary`<sup>Required</sup> <a name="workersSummary" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.workersSummary"></a>

```typescript
public readonly workersSummary: ApmSyntheticsOnPremiseVantagePointWorkersSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList">ApmSyntheticsOnPremiseVantagePointWorkersSummaryList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApmSyntheticsOnPremiseVantagePointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts">ApmSyntheticsOnPremiseVantagePointTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApmSyntheticsOnPremiseVantagePointConfig <a name="ApmSyntheticsOnPremiseVantagePointConfig" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.Initializer"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsOnPremiseVantagePointConfig: apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#apm_domain_id ApmSyntheticsOnPremiseVantagePoint#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#name ApmSyntheticsOnPremiseVantagePoint#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#defined_tags ApmSyntheticsOnPremiseVantagePoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#description ApmSyntheticsOnPremiseVantagePoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#freeform_tags ApmSyntheticsOnPremiseVantagePoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#id ApmSyntheticsOnPremiseVantagePoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts">ApmSyntheticsOnPremiseVantagePointTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#type ApmSyntheticsOnPremiseVantagePoint#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#apm_domain_id ApmSyntheticsOnPremiseVantagePoint#apm_domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#name ApmSyntheticsOnPremiseVantagePoint#name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#defined_tags ApmSyntheticsOnPremiseVantagePoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#description ApmSyntheticsOnPremiseVantagePoint#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#freeform_tags ApmSyntheticsOnPremiseVantagePoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#id ApmSyntheticsOnPremiseVantagePoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApmSyntheticsOnPremiseVantagePointTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts">ApmSyntheticsOnPremiseVantagePointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#timeouts ApmSyntheticsOnPremiseVantagePoint#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#type ApmSyntheticsOnPremiseVantagePoint#type}.

---

### ApmSyntheticsOnPremiseVantagePointTimeouts <a name="ApmSyntheticsOnPremiseVantagePointTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.Initializer"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsOnPremiseVantagePointTimeouts: apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#create ApmSyntheticsOnPremiseVantagePoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#delete ApmSyntheticsOnPremiseVantagePoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#update ApmSyntheticsOnPremiseVantagePoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#create ApmSyntheticsOnPremiseVantagePoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#delete ApmSyntheticsOnPremiseVantagePoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#update ApmSyntheticsOnPremiseVantagePoint#update}.

---

### ApmSyntheticsOnPremiseVantagePointWorkersSummary <a name="ApmSyntheticsOnPremiseVantagePointWorkersSummary" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummary.Initializer"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsOnPremiseVantagePointWorkersSummary: apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummary = { ... }
```


### ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities <a name="ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities.Initializer"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities: apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference <a name="ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts">ApmSyntheticsOnPremiseVantagePointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsOnPremiseVantagePointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts">ApmSyntheticsOnPremiseVantagePointTimeouts</a>

---


### ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList <a name="ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.get"></a>

```typescript
public get(index: number): ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.capability">capability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.onPremiseVantagePointCount">onPremiseVantagePointCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities">ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capability`<sup>Required</sup> <a name="capability" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.capability"></a>

```typescript
public readonly capability: string;
```

- *Type:* string

---

##### `onPremiseVantagePointCount`<sup>Required</sup> <a name="onPremiseVantagePointCount" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.onPremiseVantagePointCount"></a>

```typescript
public readonly onPremiseVantagePointCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities">ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities</a>

---


### ApmSyntheticsOnPremiseVantagePointWorkersSummaryList <a name="ApmSyntheticsOnPremiseVantagePointWorkersSummaryList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.get"></a>

```typescript
public get(index: number): ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsOnPremiseVantagePoint } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.available">available</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.availableCapabilities">availableCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList">ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.disabled">disabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.minVersion">minVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.total">total</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.used">used</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummary">ApmSyntheticsOnPremiseVantagePointWorkersSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `available`<sup>Required</sup> <a name="available" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.available"></a>

```typescript
public readonly available: number;
```

- *Type:* number

---

##### `availableCapabilities`<sup>Required</sup> <a name="availableCapabilities" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.availableCapabilities"></a>

```typescript
public readonly availableCapabilities: ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList">ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.disabled"></a>

```typescript
public readonly disabled: number;
```

- *Type:* number

---

##### `minVersion`<sup>Required</sup> <a name="minVersion" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.minVersion"></a>

```typescript
public readonly minVersion: string;
```

- *Type:* string

---

##### `total`<sup>Required</sup> <a name="total" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.total"></a>

```typescript
public readonly total: number;
```

- *Type:* number

---

##### `used`<sup>Required</sup> <a name="used" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.used"></a>

```typescript
public readonly used: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsOnPremiseVantagePointWorkersSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummary">ApmSyntheticsOnPremiseVantagePointWorkersSummary</a>

---



