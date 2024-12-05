# `opsiOperationsInsightsPrivateEndpoint` Submodule <a name="`opsiOperationsInsightsPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiOperationsInsightsPrivateEndpoint <a name="OpsiOperationsInsightsPrivateEndpoint" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint oci_opsi_operations_insights_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer"></a>

```typescript
import { opsiOperationsInsightsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint(scope: Construct, id: string, config: OpsiOperationsInsightsPrivateEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig">OpsiOperationsInsightsPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig">OpsiOperationsInsightsPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetPrivateEndpointStatusDetails">resetPrivateEndpointStatusDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: OpsiOperationsInsightsPrivateEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts">OpsiOperationsInsightsPrivateEndpointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetPrivateEndpointStatusDetails` <a name="resetPrivateEndpointStatusDetails" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetPrivateEndpointStatusDetails"></a>

```typescript
public resetPrivateEndpointStatusDetails(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiOperationsInsightsPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isConstruct"></a>

```typescript
import { opsiOperationsInsightsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformElement"></a>

```typescript
import { opsiOperationsInsightsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformResource"></a>

```typescript
import { opsiOperationsInsightsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport"></a>

```typescript
import { opsiOperationsInsightsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpsiOperationsInsightsPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsiOperationsInsightsPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsiOperationsInsightsPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsiOperationsInsightsPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference">OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.isUsedForRacDbsInput">isUsedForRacDbsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.privateEndpointStatusDetailsInput">privateEndpointStatusDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts">OpsiOperationsInsightsPrivateEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.isUsedForRacDbs">isUsedForRacDbs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.privateEndpointStatusDetails">privateEndpointStatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference">OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isUsedForRacDbsInput`<sup>Optional</sup> <a name="isUsedForRacDbsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.isUsedForRacDbsInput"></a>

```typescript
public readonly isUsedForRacDbsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `privateEndpointStatusDetailsInput`<sup>Optional</sup> <a name="privateEndpointStatusDetailsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.privateEndpointStatusDetailsInput"></a>

```typescript
public readonly privateEndpointStatusDetailsInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpsiOperationsInsightsPrivateEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts">OpsiOperationsInsightsPrivateEndpointTimeouts</a>

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isUsedForRacDbs`<sup>Required</sup> <a name="isUsedForRacDbs" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.isUsedForRacDbs"></a>

```typescript
public readonly isUsedForRacDbs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateEndpointStatusDetails`<sup>Required</sup> <a name="privateEndpointStatusDetails" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.privateEndpointStatusDetails"></a>

```typescript
public readonly privateEndpointStatusDetails: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiOperationsInsightsPrivateEndpointConfig <a name="OpsiOperationsInsightsPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.Initializer"></a>

```typescript
import { opsiOperationsInsightsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const opsiOperationsInsightsPrivateEndpointConfig: opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#compartment_id OpsiOperationsInsightsPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#display_name OpsiOperationsInsightsPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.isUsedForRacDbs">isUsedForRacDbs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#is_used_for_rac_dbs OpsiOperationsInsightsPrivateEndpoint#is_used_for_rac_dbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#subnet_id OpsiOperationsInsightsPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#vcn_id OpsiOperationsInsightsPrivateEndpoint#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#defined_tags OpsiOperationsInsightsPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#description OpsiOperationsInsightsPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#freeform_tags OpsiOperationsInsightsPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#id OpsiOperationsInsightsPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#nsg_ids OpsiOperationsInsightsPrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.privateEndpointStatusDetails">privateEndpointStatusDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#private_endpoint_status_details OpsiOperationsInsightsPrivateEndpoint#private_endpoint_status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts">OpsiOperationsInsightsPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#compartment_id OpsiOperationsInsightsPrivateEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#display_name OpsiOperationsInsightsPrivateEndpoint#display_name}.

---

##### `isUsedForRacDbs`<sup>Required</sup> <a name="isUsedForRacDbs" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.isUsedForRacDbs"></a>

```typescript
public readonly isUsedForRacDbs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#is_used_for_rac_dbs OpsiOperationsInsightsPrivateEndpoint#is_used_for_rac_dbs}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#subnet_id OpsiOperationsInsightsPrivateEndpoint#subnet_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#vcn_id OpsiOperationsInsightsPrivateEndpoint#vcn_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#defined_tags OpsiOperationsInsightsPrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#description OpsiOperationsInsightsPrivateEndpoint#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#freeform_tags OpsiOperationsInsightsPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#id OpsiOperationsInsightsPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#nsg_ids OpsiOperationsInsightsPrivateEndpoint#nsg_ids}.

---

##### `privateEndpointStatusDetails`<sup>Optional</sup> <a name="privateEndpointStatusDetails" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.privateEndpointStatusDetails"></a>

```typescript
public readonly privateEndpointStatusDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#private_endpoint_status_details OpsiOperationsInsightsPrivateEndpoint#private_endpoint_status_details}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpsiOperationsInsightsPrivateEndpointTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts">OpsiOperationsInsightsPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#timeouts OpsiOperationsInsightsPrivateEndpoint#timeouts}

---

### OpsiOperationsInsightsPrivateEndpointTimeouts <a name="OpsiOperationsInsightsPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.Initializer"></a>

```typescript
import { opsiOperationsInsightsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const opsiOperationsInsightsPrivateEndpointTimeouts: opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#create OpsiOperationsInsightsPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#delete OpsiOperationsInsightsPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#update OpsiOperationsInsightsPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#create OpsiOperationsInsightsPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#delete OpsiOperationsInsightsPrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#update OpsiOperationsInsightsPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference <a name="OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { opsiOperationsInsightsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts">OpsiOperationsInsightsPrivateEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiOperationsInsightsPrivateEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts">OpsiOperationsInsightsPrivateEndpointTimeouts</a>

---



