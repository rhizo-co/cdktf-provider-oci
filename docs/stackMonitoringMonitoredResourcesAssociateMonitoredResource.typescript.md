# `stackMonitoringMonitoredResourcesAssociateMonitoredResource` Submodule <a name="`stackMonitoringMonitoredResourcesAssociateMonitoredResource` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourcesAssociateMonitoredResource <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource oci_stack_monitoring_monitored_resources_associate_monitored_resource}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource(scope: Construct, id: string, config: StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig">StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig">StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts"></a>

```typescript
public putTimeouts(value: StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourcesAssociateMonitoredResource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourcesAssociateMonitoredResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMonitoredResourcesAssociateMonitoredResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMonitoredResourcesAssociateMonitoredResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourcesAssociateMonitoredResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceDetails">destinationResourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceDetails">sourceResourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationTypeInput">associationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceIdInput">destinationResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceIdInput">sourceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationType">associationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceId">destinationResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceId">sourceResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `destinationResourceDetails`<sup>Required</sup> <a name="destinationResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceDetails"></a>

```typescript
public readonly destinationResourceDetails: StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList</a>

---

##### `sourceResourceDetails`<sup>Required</sup> <a name="sourceResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceDetails"></a>

```typescript
public readonly sourceResourceDetails: StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList</a>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference</a>

---

##### `associationTypeInput`<sup>Optional</sup> <a name="associationTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationTypeInput"></a>

```typescript
public readonly associationTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `destinationResourceIdInput`<sup>Optional</sup> <a name="destinationResourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceIdInput"></a>

```typescript
public readonly destinationResourceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sourceResourceIdInput`<sup>Optional</sup> <a name="sourceResourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceIdInput"></a>

```typescript
public readonly sourceResourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationType"></a>

```typescript
public readonly associationType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `destinationResourceId`<sup>Required</sup> <a name="destinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceId"></a>

```typescript
public readonly destinationResourceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sourceResourceId`<sup>Required</sup> <a name="sourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceId"></a>

```typescript
public readonly sourceResourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig: stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.associationType">associationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#association_type StackMonitoringMonitoredResourcesAssociateMonitoredResource#association_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#compartment_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.destinationResourceId">destinationResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#destination_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#destination_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.sourceResourceId">sourceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#source_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#source_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#id StackMonitoringMonitoredResourcesAssociateMonitoredResource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.associationType"></a>

```typescript
public readonly associationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#association_type StackMonitoringMonitoredResourcesAssociateMonitoredResource#association_type}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#compartment_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#compartment_id}.

---

##### `destinationResourceId`<sup>Required</sup> <a name="destinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.destinationResourceId"></a>

```typescript
public readonly destinationResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#destination_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#destination_resource_id}.

---

##### `sourceResourceId`<sup>Required</sup> <a name="sourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.sourceResourceId"></a>

```typescript
public readonly sourceResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#source_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#source_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#id StackMonitoringMonitoredResourcesAssociateMonitoredResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#timeouts StackMonitoringMonitoredResourcesAssociateMonitoredResource#timeouts}

---

### StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails: stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails = { ... }
```


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails: stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails = { ... }
```


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts: stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#create StackMonitoringMonitoredResourcesAssociateMonitoredResource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#delete StackMonitoringMonitoredResourcesAssociateMonitoredResource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#update StackMonitoringMonitoredResourcesAssociateMonitoredResource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#create StackMonitoringMonitoredResourcesAssociateMonitoredResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#delete StackMonitoringMonitoredResourcesAssociateMonitoredResource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#update StackMonitoringMonitoredResourcesAssociateMonitoredResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.get"></a>

```typescript
public get(index: number): StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails</a>

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.get"></a>

```typescript
public get(index: number): StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails</a>

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesAssociateMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>

---



