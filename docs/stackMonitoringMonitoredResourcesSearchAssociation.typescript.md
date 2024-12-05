# `stackMonitoringMonitoredResourcesSearchAssociation` Submodule <a name="`stackMonitoringMonitoredResourcesSearchAssociation` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourcesSearchAssociation <a name="StackMonitoringMonitoredResourcesSearchAssociation" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association oci_stack_monitoring_monitored_resources_search_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation(scope: Construct, id: string, config: StackMonitoringMonitoredResourcesSearchAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig">StackMonitoringMonitoredResourcesSearchAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig">StackMonitoringMonitoredResourcesSearchAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetAssociationType">resetAssociationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetDestinationResourceId">resetDestinationResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetDestinationResourceName">resetDestinationResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetDestinationResourceType">resetDestinationResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetSourceResourceId">resetSourceResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetSourceResourceName">resetSourceResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetSourceResourceType">resetSourceResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: StackMonitoringMonitoredResourcesSearchAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts">StackMonitoringMonitoredResourcesSearchAssociationTimeouts</a>

---

##### `resetAssociationType` <a name="resetAssociationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetAssociationType"></a>

```typescript
public resetAssociationType(): void
```

##### `resetDestinationResourceId` <a name="resetDestinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetDestinationResourceId"></a>

```typescript
public resetDestinationResourceId(): void
```

##### `resetDestinationResourceName` <a name="resetDestinationResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetDestinationResourceName"></a>

```typescript
public resetDestinationResourceName(): void
```

##### `resetDestinationResourceType` <a name="resetDestinationResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetDestinationResourceType"></a>

```typescript
public resetDestinationResourceType(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSourceResourceId` <a name="resetSourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetSourceResourceId"></a>

```typescript
public resetSourceResourceId(): void
```

##### `resetSourceResourceName` <a name="resetSourceResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetSourceResourceName"></a>

```typescript
public resetSourceResourceName(): void
```

##### `resetSourceResourceType` <a name="resetSourceResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetSourceResourceType"></a>

```typescript
public resetSourceResourceType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourcesSearchAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isConstruct"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformElement"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformResource"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourcesSearchAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMonitoredResourcesSearchAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMonitoredResourcesSearchAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourcesSearchAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList">StackMonitoringMonitoredResourcesSearchAssociationItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference">StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.associationTypeInput">associationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceIdInput">destinationResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceNameInput">destinationResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceTypeInput">destinationResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceIdInput">sourceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceNameInput">sourceResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceTypeInput">sourceResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts">StackMonitoringMonitoredResourcesSearchAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.associationType">associationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceId">destinationResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceName">destinationResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceType">destinationResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceId">sourceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceName">sourceResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceType">sourceResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.items"></a>

```typescript
public readonly items: StackMonitoringMonitoredResourcesSearchAssociationItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList">StackMonitoringMonitoredResourcesSearchAssociationItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference">StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference</a>

---

##### `associationTypeInput`<sup>Optional</sup> <a name="associationTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.associationTypeInput"></a>

```typescript
public readonly associationTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `destinationResourceIdInput`<sup>Optional</sup> <a name="destinationResourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceIdInput"></a>

```typescript
public readonly destinationResourceIdInput: string;
```

- *Type:* string

---

##### `destinationResourceNameInput`<sup>Optional</sup> <a name="destinationResourceNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceNameInput"></a>

```typescript
public readonly destinationResourceNameInput: string;
```

- *Type:* string

---

##### `destinationResourceTypeInput`<sup>Optional</sup> <a name="destinationResourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceTypeInput"></a>

```typescript
public readonly destinationResourceTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sourceResourceIdInput`<sup>Optional</sup> <a name="sourceResourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceIdInput"></a>

```typescript
public readonly sourceResourceIdInput: string;
```

- *Type:* string

---

##### `sourceResourceNameInput`<sup>Optional</sup> <a name="sourceResourceNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceNameInput"></a>

```typescript
public readonly sourceResourceNameInput: string;
```

- *Type:* string

---

##### `sourceResourceTypeInput`<sup>Optional</sup> <a name="sourceResourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceTypeInput"></a>

```typescript
public readonly sourceResourceTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StackMonitoringMonitoredResourcesSearchAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts">StackMonitoringMonitoredResourcesSearchAssociationTimeouts</a>

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.associationType"></a>

```typescript
public readonly associationType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `destinationResourceId`<sup>Required</sup> <a name="destinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceId"></a>

```typescript
public readonly destinationResourceId: string;
```

- *Type:* string

---

##### `destinationResourceName`<sup>Required</sup> <a name="destinationResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceName"></a>

```typescript
public readonly destinationResourceName: string;
```

- *Type:* string

---

##### `destinationResourceType`<sup>Required</sup> <a name="destinationResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceType"></a>

```typescript
public readonly destinationResourceType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sourceResourceId`<sup>Required</sup> <a name="sourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceId"></a>

```typescript
public readonly sourceResourceId: string;
```

- *Type:* string

---

##### `sourceResourceName`<sup>Required</sup> <a name="sourceResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceName"></a>

```typescript
public readonly sourceResourceName: string;
```

- *Type:* string

---

##### `sourceResourceType`<sup>Required</sup> <a name="sourceResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceType"></a>

```typescript
public readonly sourceResourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourcesSearchAssociationConfig <a name="StackMonitoringMonitoredResourcesSearchAssociationConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesSearchAssociationConfig: stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#compartment_id StackMonitoringMonitoredResourcesSearchAssociation#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.associationType">associationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#association_type StackMonitoringMonitoredResourcesSearchAssociation#association_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.destinationResourceId">destinationResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#destination_resource_id StackMonitoringMonitoredResourcesSearchAssociation#destination_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.destinationResourceName">destinationResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#destination_resource_name StackMonitoringMonitoredResourcesSearchAssociation#destination_resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.destinationResourceType">destinationResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#destination_resource_type StackMonitoringMonitoredResourcesSearchAssociation#destination_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#id StackMonitoringMonitoredResourcesSearchAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.sourceResourceId">sourceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#source_resource_id StackMonitoringMonitoredResourcesSearchAssociation#source_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.sourceResourceName">sourceResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#source_resource_name StackMonitoringMonitoredResourcesSearchAssociation#source_resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.sourceResourceType">sourceResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#source_resource_type StackMonitoringMonitoredResourcesSearchAssociation#source_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts">StackMonitoringMonitoredResourcesSearchAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#compartment_id StackMonitoringMonitoredResourcesSearchAssociation#compartment_id}.

---

##### `associationType`<sup>Optional</sup> <a name="associationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.associationType"></a>

```typescript
public readonly associationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#association_type StackMonitoringMonitoredResourcesSearchAssociation#association_type}.

---

##### `destinationResourceId`<sup>Optional</sup> <a name="destinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.destinationResourceId"></a>

```typescript
public readonly destinationResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#destination_resource_id StackMonitoringMonitoredResourcesSearchAssociation#destination_resource_id}.

---

##### `destinationResourceName`<sup>Optional</sup> <a name="destinationResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.destinationResourceName"></a>

```typescript
public readonly destinationResourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#destination_resource_name StackMonitoringMonitoredResourcesSearchAssociation#destination_resource_name}.

---

##### `destinationResourceType`<sup>Optional</sup> <a name="destinationResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.destinationResourceType"></a>

```typescript
public readonly destinationResourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#destination_resource_type StackMonitoringMonitoredResourcesSearchAssociation#destination_resource_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#id StackMonitoringMonitoredResourcesSearchAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceResourceId`<sup>Optional</sup> <a name="sourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.sourceResourceId"></a>

```typescript
public readonly sourceResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#source_resource_id StackMonitoringMonitoredResourcesSearchAssociation#source_resource_id}.

---

##### `sourceResourceName`<sup>Optional</sup> <a name="sourceResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.sourceResourceName"></a>

```typescript
public readonly sourceResourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#source_resource_name StackMonitoringMonitoredResourcesSearchAssociation#source_resource_name}.

---

##### `sourceResourceType`<sup>Optional</sup> <a name="sourceResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.sourceResourceType"></a>

```typescript
public readonly sourceResourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#source_resource_type StackMonitoringMonitoredResourcesSearchAssociation#source_resource_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMonitoredResourcesSearchAssociationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts">StackMonitoringMonitoredResourcesSearchAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#timeouts StackMonitoringMonitoredResourcesSearchAssociation#timeouts}

---

### StackMonitoringMonitoredResourcesSearchAssociationItems <a name="StackMonitoringMonitoredResourcesSearchAssociationItems" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItems.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesSearchAssociationItems: stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItems = { ... }
```


### StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails: stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails = { ... }
```


### StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails: stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails = { ... }
```


### StackMonitoringMonitoredResourcesSearchAssociationTimeouts <a name="StackMonitoringMonitoredResourcesSearchAssociationTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesSearchAssociationTimeouts: stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#create StackMonitoringMonitoredResourcesSearchAssociation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#delete StackMonitoringMonitoredResourcesSearchAssociation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#update StackMonitoringMonitoredResourcesSearchAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#create StackMonitoringMonitoredResourcesSearchAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#delete StackMonitoringMonitoredResourcesSearchAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#update StackMonitoringMonitoredResourcesSearchAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.get"></a>

```typescript
public get(index: number): StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails">StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails">StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails</a>

---


### StackMonitoringMonitoredResourcesSearchAssociationItemsList <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.get"></a>

```typescript
public get(index: number): StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.associationType">associationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.destinationResourceDetails">destinationResourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList">StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.destinationResourceId">destinationResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.sourceResourceDetails">sourceResourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList">StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.sourceResourceId">sourceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItems">StackMonitoringMonitoredResourcesSearchAssociationItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.associationType"></a>

```typescript
public readonly associationType: string;
```

- *Type:* string

---

##### `destinationResourceDetails`<sup>Required</sup> <a name="destinationResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.destinationResourceDetails"></a>

```typescript
public readonly destinationResourceDetails: StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList">StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList</a>

---

##### `destinationResourceId`<sup>Required</sup> <a name="destinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.destinationResourceId"></a>

```typescript
public readonly destinationResourceId: string;
```

- *Type:* string

---

##### `sourceResourceDetails`<sup>Required</sup> <a name="sourceResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.sourceResourceDetails"></a>

```typescript
public readonly sourceResourceDetails: StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList">StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList</a>

---

##### `sourceResourceId`<sup>Required</sup> <a name="sourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.sourceResourceId"></a>

```typescript
public readonly sourceResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMonitoredResourcesSearchAssociationItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItems">StackMonitoringMonitoredResourcesSearchAssociationItems</a>

---


### StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.get"></a>

```typescript
public get(index: number): StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails">StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails">StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails</a>

---


### StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference <a name="StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearchAssociation } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts">StackMonitoringMonitoredResourcesSearchAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourcesSearchAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts">StackMonitoringMonitoredResourcesSearchAssociationTimeouts</a>

---



