# `meteringComputationUsageCarbonEmission` Submodule <a name="`meteringComputationUsageCarbonEmission` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationUsageCarbonEmission <a name="MeteringComputationUsageCarbonEmission" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission oci_metering_computation_usage_carbon_emission}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

new meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission(scope: Construct, id: string, config: MeteringComputationUsageCarbonEmissionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig">MeteringComputationUsageCarbonEmissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig">MeteringComputationUsageCarbonEmissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putGroupByTag">putGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetCompartmentDepth">resetCompartmentDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupByTag">resetGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetIsAggregateByTime">resetIsAggregateByTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetUsageCarbonEmissionFilter">resetUsageCarbonEmissionFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGroupByTag` <a name="putGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putGroupByTag"></a>

```typescript
public putGroupByTag(value: IResolvable | MeteringComputationUsageCarbonEmissionGroupByTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putGroupByTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts"></a>

```typescript
public putTimeouts(value: MeteringComputationUsageCarbonEmissionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

---

##### `resetCompartmentDepth` <a name="resetCompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetCompartmentDepth"></a>

```typescript
public resetCompartmentDepth(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetGroupByTag` <a name="resetGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupByTag"></a>

```typescript
public resetGroupByTag(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAggregateByTime` <a name="resetIsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetIsAggregateByTime"></a>

```typescript
public resetIsAggregateByTime(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUsageCarbonEmissionFilter` <a name="resetUsageCarbonEmissionFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetUsageCarbonEmissionFilter"></a>

```typescript
public resetUsageCarbonEmissionFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MeteringComputationUsageCarbonEmission resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MeteringComputationUsageCarbonEmission resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MeteringComputationUsageCarbonEmission to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MeteringComputationUsageCarbonEmission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationUsageCarbonEmission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTag">groupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList">MeteringComputationUsageCarbonEmissionGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList">MeteringComputationUsageCarbonEmissionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference">MeteringComputationUsageCarbonEmissionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepthInput">compartmentDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTagInput">groupByTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTimeInput">isAggregateByTimeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEndedInput">timeUsageEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStartedInput">timeUsageStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilterInput">usageCarbonEmissionFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepth">compartmentDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTime">isAggregateByTime</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEnded">timeUsageEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStarted">timeUsageStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilter">usageCarbonEmissionFilter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupByTag`<sup>Required</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTag"></a>

```typescript
public readonly groupByTag: MeteringComputationUsageCarbonEmissionGroupByTagList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList">MeteringComputationUsageCarbonEmissionGroupByTagList</a>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.items"></a>

```typescript
public readonly items: MeteringComputationUsageCarbonEmissionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList">MeteringComputationUsageCarbonEmissionItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeouts"></a>

```typescript
public readonly timeouts: MeteringComputationUsageCarbonEmissionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference">MeteringComputationUsageCarbonEmissionTimeoutsOutputReference</a>

---

##### `compartmentDepthInput`<sup>Optional</sup> <a name="compartmentDepthInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepthInput"></a>

```typescript
public readonly compartmentDepthInput: number;
```

- *Type:* number

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `groupByTagInput`<sup>Optional</sup> <a name="groupByTagInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTagInput"></a>

```typescript
public readonly groupByTagInput: IResolvable | MeteringComputationUsageCarbonEmissionGroupByTag[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAggregateByTimeInput`<sup>Optional</sup> <a name="isAggregateByTimeInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTimeInput"></a>

```typescript
public readonly isAggregateByTimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MeteringComputationUsageCarbonEmissionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

---

##### `timeUsageEndedInput`<sup>Optional</sup> <a name="timeUsageEndedInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEndedInput"></a>

```typescript
public readonly timeUsageEndedInput: string;
```

- *Type:* string

---

##### `timeUsageStartedInput`<sup>Optional</sup> <a name="timeUsageStartedInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStartedInput"></a>

```typescript
public readonly timeUsageStartedInput: string;
```

- *Type:* string

---

##### `usageCarbonEmissionFilterInput`<sup>Optional</sup> <a name="usageCarbonEmissionFilterInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilterInput"></a>

```typescript
public readonly usageCarbonEmissionFilterInput: string;
```

- *Type:* string

---

##### `compartmentDepth`<sup>Required</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepth"></a>

```typescript
public readonly compartmentDepth: number;
```

- *Type:* number

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAggregateByTime`<sup>Required</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTime"></a>

```typescript
public readonly isAggregateByTime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEnded"></a>

```typescript
public readonly timeUsageEnded: string;
```

- *Type:* string

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStarted"></a>

```typescript
public readonly timeUsageStarted: string;
```

- *Type:* string

---

##### `usageCarbonEmissionFilter`<sup>Required</sup> <a name="usageCarbonEmissionFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilter"></a>

```typescript
public readonly usageCarbonEmissionFilter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationUsageCarbonEmissionConfig <a name="MeteringComputationUsageCarbonEmissionConfig" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

const meteringComputationUsageCarbonEmissionConfig: meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageEnded">timeUsageEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageStarted">timeUsageStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.compartmentDepth">compartmentDepth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupBy">groupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupByTag">groupByTag</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>[]</code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.isAggregateByTime">isAggregateByTime</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.usageCarbonEmissionFilter">usageCarbonEmissionFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}.

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageEnded"></a>

```typescript
public readonly timeUsageEnded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}.

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageStarted"></a>

```typescript
public readonly timeUsageStarted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}.

---

##### `compartmentDepth`<sup>Optional</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.compartmentDepth"></a>

```typescript
public readonly compartmentDepth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}.

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}.

---

##### `groupByTag`<sup>Optional</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupByTag"></a>

```typescript
public readonly groupByTag: IResolvable | MeteringComputationUsageCarbonEmissionGroupByTag[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>[]

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by_tag MeteringComputationUsageCarbonEmission#group_by_tag}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAggregateByTime`<sup>Optional</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.isAggregateByTime"></a>

```typescript
public readonly isAggregateByTime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MeteringComputationUsageCarbonEmissionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#timeouts MeteringComputationUsageCarbonEmission#timeouts}

---

##### `usageCarbonEmissionFilter`<sup>Optional</sup> <a name="usageCarbonEmissionFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.usageCarbonEmissionFilter"></a>

```typescript
public readonly usageCarbonEmissionFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}.

---

### MeteringComputationUsageCarbonEmissionGroupByTag <a name="MeteringComputationUsageCarbonEmissionGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

const meteringComputationUsageCarbonEmissionGroupByTag: meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#key MeteringComputationUsageCarbonEmission#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#namespace MeteringComputationUsageCarbonEmission#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#value MeteringComputationUsageCarbonEmission#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#key MeteringComputationUsageCarbonEmission#key}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#namespace MeteringComputationUsageCarbonEmission#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#value MeteringComputationUsageCarbonEmission#value}.

---

### MeteringComputationUsageCarbonEmissionItems <a name="MeteringComputationUsageCarbonEmissionItems" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

const meteringComputationUsageCarbonEmissionItems: meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems = { ... }
```


### MeteringComputationUsageCarbonEmissionItemsTags <a name="MeteringComputationUsageCarbonEmissionItemsTags" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

const meteringComputationUsageCarbonEmissionItemsTags: meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags = { ... }
```


### MeteringComputationUsageCarbonEmissionTimeouts <a name="MeteringComputationUsageCarbonEmissionTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

const meteringComputationUsageCarbonEmissionTimeouts: meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#create MeteringComputationUsageCarbonEmission#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#delete MeteringComputationUsageCarbonEmission#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#update MeteringComputationUsageCarbonEmission#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#create MeteringComputationUsageCarbonEmission#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#delete MeteringComputationUsageCarbonEmission#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#update MeteringComputationUsageCarbonEmission#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationUsageCarbonEmissionGroupByTagList <a name="MeteringComputationUsageCarbonEmissionGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

new meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.get"></a>

```typescript
public get(index: number): MeteringComputationUsageCarbonEmissionGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MeteringComputationUsageCarbonEmissionGroupByTag[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>[]

---


### MeteringComputationUsageCarbonEmissionGroupByTagOutputReference <a name="MeteringComputationUsageCarbonEmissionGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

new meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MeteringComputationUsageCarbonEmissionGroupByTag;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>

---


### MeteringComputationUsageCarbonEmissionItemsList <a name="MeteringComputationUsageCarbonEmissionItemsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

new meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.get"></a>

```typescript
public get(index: number): MeteringComputationUsageCarbonEmissionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MeteringComputationUsageCarbonEmissionItemsOutputReference <a name="MeteringComputationUsageCarbonEmissionItemsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

new meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.ad">ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentName">compartmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentPath">compartmentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.computedCarbonEmission">computedCarbonEmission</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.emissionCalculationMethod">emissionCalculationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuPartNumber">skuPartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList">MeteringComputationUsageCarbonEmissionItemsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantName">tenantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageEnded">timeUsageEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageStarted">timeUsageStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems">MeteringComputationUsageCarbonEmissionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.ad"></a>

```typescript
public readonly ad: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentName`<sup>Required</sup> <a name="compartmentName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentName"></a>

```typescript
public readonly compartmentName: string;
```

- *Type:* string

---

##### `compartmentPath`<sup>Required</sup> <a name="compartmentPath" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentPath"></a>

```typescript
public readonly compartmentPath: string;
```

- *Type:* string

---

##### `computedCarbonEmission`<sup>Required</sup> <a name="computedCarbonEmission" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.computedCarbonEmission"></a>

```typescript
public readonly computedCarbonEmission: number;
```

- *Type:* number

---

##### `emissionCalculationMethod`<sup>Required</sup> <a name="emissionCalculationMethod" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.emissionCalculationMethod"></a>

```typescript
public readonly emissionCalculationMethod: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `skuPartNumber`<sup>Required</sup> <a name="skuPartNumber" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuPartNumber"></a>

```typescript
public readonly skuPartNumber: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tags"></a>

```typescript
public readonly tags: MeteringComputationUsageCarbonEmissionItemsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList">MeteringComputationUsageCarbonEmissionItemsTagsList</a>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageEnded"></a>

```typescript
public readonly timeUsageEnded: string;
```

- *Type:* string

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageStarted"></a>

```typescript
public readonly timeUsageStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MeteringComputationUsageCarbonEmissionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems">MeteringComputationUsageCarbonEmissionItems</a>

---


### MeteringComputationUsageCarbonEmissionItemsTagsList <a name="MeteringComputationUsageCarbonEmissionItemsTagsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

new meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.get"></a>

```typescript
public get(index: number): MeteringComputationUsageCarbonEmissionItemsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MeteringComputationUsageCarbonEmissionItemsTagsOutputReference <a name="MeteringComputationUsageCarbonEmissionItemsTagsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

new meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags">MeteringComputationUsageCarbonEmissionItemsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MeteringComputationUsageCarbonEmissionItemsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags">MeteringComputationUsageCarbonEmissionItemsTags</a>

---


### MeteringComputationUsageCarbonEmissionTimeoutsOutputReference <a name="MeteringComputationUsageCarbonEmissionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer"></a>

```typescript
import { meteringComputationUsageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

new meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MeteringComputationUsageCarbonEmissionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

---



