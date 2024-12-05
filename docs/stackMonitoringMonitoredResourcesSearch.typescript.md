# `stackMonitoringMonitoredResourcesSearch` Submodule <a name="`stackMonitoringMonitoredResourcesSearch` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourcesSearch <a name="StackMonitoringMonitoredResourcesSearch" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search oci_stack_monitoring_monitored_resources_search}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch(scope: Construct, id: string, config: StackMonitoringMonitoredResourcesSearchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig">StackMonitoringMonitoredResourcesSearchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig">StackMonitoringMonitoredResourcesSearchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetCompartmentIds">resetCompartmentIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExcludeFields">resetExcludeFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostNameContains">resetHostNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLicense">resetLicense</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLifecycleStates">resetLifecycleStates</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetManagementAgentId">resetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetNameContains">resetNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetPropertyEquals">resetPropertyEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceCategory">resetResourceCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceTimeZone">resetResourceTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedGreaterThanOrEqualTo">resetTimeUpdatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedLessThan">resetTimeUpdatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts"></a>

```typescript
public putTimeouts(value: StackMonitoringMonitoredResourcesSearchTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>

---

##### `resetCompartmentIds` <a name="resetCompartmentIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetCompartmentIds"></a>

```typescript
public resetCompartmentIds(): void
```

##### `resetExcludeFields` <a name="resetExcludeFields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExcludeFields"></a>

```typescript
public resetExcludeFields(): void
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetFields` <a name="resetFields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetHostName` <a name="resetHostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetHostNameContains` <a name="resetHostNameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostNameContains"></a>

```typescript
public resetHostNameContains(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicense` <a name="resetLicense" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLicense"></a>

```typescript
public resetLicense(): void
```

##### `resetLifecycleStates` <a name="resetLifecycleStates" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLifecycleStates"></a>

```typescript
public resetLifecycleStates(): void
```

##### `resetManagementAgentId` <a name="resetManagementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetManagementAgentId"></a>

```typescript
public resetManagementAgentId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameContains` <a name="resetNameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetNameContains"></a>

```typescript
public resetNameContains(): void
```

##### `resetPropertyEquals` <a name="resetPropertyEquals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetPropertyEquals"></a>

```typescript
public resetPropertyEquals(): void
```

##### `resetResourceCategory` <a name="resetResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceCategory"></a>

```typescript
public resetResourceCategory(): void
```

##### `resetResourceTimeZone` <a name="resetResourceTimeZone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceTimeZone"></a>

```typescript
public resetResourceTimeZone(): void
```

##### `resetSourceType` <a name="resetSourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetSourceType"></a>

```typescript
public resetSourceType(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeCreatedGreaterThanOrEqualTo(): void
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedLessThan"></a>

```typescript
public resetTimeCreatedLessThan(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeUpdatedGreaterThanOrEqualTo` <a name="resetTimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeUpdatedGreaterThanOrEqualTo(): void
```

##### `resetTimeUpdatedLessThan` <a name="resetTimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedLessThan"></a>

```typescript
public resetTimeUpdatedLessThan(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourcesSearch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourcesSearch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMonitoredResourcesSearch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMonitoredResourcesSearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourcesSearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList">StackMonitoringMonitoredResourcesSearchItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference">StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdsInput">compartmentIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFieldsInput">excludeFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fieldsInput">fieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContainsInput">hostNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.licenseInput">licenseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStatesInput">lifecycleStatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContainsInput">nameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEqualsInput">propertyEqualsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategoryInput">resourceCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZoneInput">resourceTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualToInput">timeUpdatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThanInput">timeUpdatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIds">compartmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFields">excludeFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContains">hostNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.license">license</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStates">lifecycleStates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContains">nameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEquals">propertyEquals</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategory">resourceCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZone">resourceTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualTo">timeUpdatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThan">timeUpdatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.items"></a>

```typescript
public readonly items: StackMonitoringMonitoredResourcesSearchItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList">StackMonitoringMonitoredResourcesSearchItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference">StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdsInput`<sup>Optional</sup> <a name="compartmentIdsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdsInput"></a>

```typescript
public readonly compartmentIdsInput: string[];
```

- *Type:* string[]

---

##### `excludeFieldsInput`<sup>Optional</sup> <a name="excludeFieldsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFieldsInput"></a>

```typescript
public readonly excludeFieldsInput: string[];
```

- *Type:* string[]

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string[];
```

- *Type:* string[]

---

##### `hostNameContainsInput`<sup>Optional</sup> <a name="hostNameContainsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContainsInput"></a>

```typescript
public readonly hostNameContainsInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseInput`<sup>Optional</sup> <a name="licenseInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.licenseInput"></a>

```typescript
public readonly licenseInput: string;
```

- *Type:* string

---

##### `lifecycleStatesInput`<sup>Optional</sup> <a name="lifecycleStatesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStatesInput"></a>

```typescript
public readonly lifecycleStatesInput: string[];
```

- *Type:* string[]

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentIdInput"></a>

```typescript
public readonly managementAgentIdInput: string;
```

- *Type:* string

---

##### `nameContainsInput`<sup>Optional</sup> <a name="nameContainsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContainsInput"></a>

```typescript
public readonly nameContainsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertyEqualsInput`<sup>Optional</sup> <a name="propertyEqualsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEqualsInput"></a>

```typescript
public readonly propertyEqualsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceCategoryInput`<sup>Optional</sup> <a name="resourceCategoryInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategoryInput"></a>

```typescript
public readonly resourceCategoryInput: string;
```

- *Type:* string

---

##### `resourceTimeZoneInput`<sup>Optional</sup> <a name="resourceTimeZoneInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZoneInput"></a>

```typescript
public readonly resourceTimeZoneInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThanInput"></a>

```typescript
public readonly timeCreatedLessThanInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StackMonitoringMonitoredResourcesSearchTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>

---

##### `timeUpdatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeUpdatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeUpdatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeUpdatedLessThanInput`<sup>Optional</sup> <a name="timeUpdatedLessThanInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThanInput"></a>

```typescript
public readonly timeUpdatedLessThanInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIds`<sup>Required</sup> <a name="compartmentIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIds"></a>

```typescript
public readonly compartmentIds: string[];
```

- *Type:* string[]

---

##### `excludeFields`<sup>Required</sup> <a name="excludeFields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFields"></a>

```typescript
public readonly excludeFields: string[];
```

- *Type:* string[]

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `hostNameContains`<sup>Required</sup> <a name="hostNameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContains"></a>

```typescript
public readonly hostNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `license`<sup>Required</sup> <a name="license" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

---

##### `lifecycleStates`<sup>Required</sup> <a name="lifecycleStates" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStates"></a>

```typescript
public readonly lifecycleStates: string[];
```

- *Type:* string[]

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameContains`<sup>Required</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContains"></a>

```typescript
public readonly nameContains: string;
```

- *Type:* string

---

##### `propertyEquals`<sup>Required</sup> <a name="propertyEquals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEquals"></a>

```typescript
public readonly propertyEquals: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceCategory`<sup>Required</sup> <a name="resourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategory"></a>

```typescript
public readonly resourceCategory: string;
```

- *Type:* string

---

##### `resourceTimeZone`<sup>Required</sup> <a name="resourceTimeZone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZone"></a>

```typescript
public readonly resourceTimeZone: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

---

##### `timeUpdatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeUpdatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeUpdatedLessThan`<sup>Required</sup> <a name="timeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThan"></a>

```typescript
public readonly timeUpdatedLessThan: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourcesSearchConfig <a name="StackMonitoringMonitoredResourcesSearchConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesSearchConfig: stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_id StackMonitoringMonitoredResourcesSearch#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentIds">compartmentIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_ids StackMonitoringMonitoredResourcesSearch#compartment_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.excludeFields">excludeFields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#exclude_fields StackMonitoringMonitoredResourcesSearch#exclude_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#external_id StackMonitoringMonitoredResourcesSearch#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.fields">fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#fields StackMonitoringMonitoredResourcesSearch#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name StackMonitoringMonitoredResourcesSearch#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostNameContains">hostNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name_contains StackMonitoringMonitoredResourcesSearch#host_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#id StackMonitoringMonitoredResourcesSearch#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.license">license</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#license StackMonitoringMonitoredResourcesSearch#license}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycleStates">lifecycleStates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#lifecycle_states StackMonitoringMonitoredResourcesSearch#lifecycle_states}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#management_agent_id StackMonitoringMonitoredResourcesSearch#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name StackMonitoringMonitoredResourcesSearch#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.nameContains">nameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name_contains StackMonitoringMonitoredResourcesSearch#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.propertyEquals">propertyEquals</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#property_equals StackMonitoringMonitoredResourcesSearch#property_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceCategory">resourceCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_category StackMonitoringMonitoredResourcesSearch#resource_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceTimeZone">resourceTimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_time_zone StackMonitoringMonitoredResourcesSearch#resource_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#source_type StackMonitoringMonitoredResourcesSearch#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#state StackMonitoringMonitoredResourcesSearch#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_less_than StackMonitoringMonitoredResourcesSearch#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedGreaterThanOrEqualTo">timeUpdatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedLessThan">timeUpdatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_less_than StackMonitoringMonitoredResourcesSearch#time_updated_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#type StackMonitoringMonitoredResourcesSearch#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_id StackMonitoringMonitoredResourcesSearch#compartment_id}.

---

##### `compartmentIds`<sup>Optional</sup> <a name="compartmentIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentIds"></a>

```typescript
public readonly compartmentIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_ids StackMonitoringMonitoredResourcesSearch#compartment_ids}.

---

##### `excludeFields`<sup>Optional</sup> <a name="excludeFields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.excludeFields"></a>

```typescript
public readonly excludeFields: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#exclude_fields StackMonitoringMonitoredResourcesSearch#exclude_fields}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#external_id StackMonitoringMonitoredResourcesSearch#external_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#fields StackMonitoringMonitoredResourcesSearch#fields}.

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name StackMonitoringMonitoredResourcesSearch#host_name}.

---

##### `hostNameContains`<sup>Optional</sup> <a name="hostNameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostNameContains"></a>

```typescript
public readonly hostNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name_contains StackMonitoringMonitoredResourcesSearch#host_name_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#id StackMonitoringMonitoredResourcesSearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license`<sup>Optional</sup> <a name="license" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#license StackMonitoringMonitoredResourcesSearch#license}.

---

##### `lifecycleStates`<sup>Optional</sup> <a name="lifecycleStates" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycleStates"></a>

```typescript
public readonly lifecycleStates: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#lifecycle_states StackMonitoringMonitoredResourcesSearch#lifecycle_states}.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#management_agent_id StackMonitoringMonitoredResourcesSearch#management_agent_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name StackMonitoringMonitoredResourcesSearch#name}.

---

##### `nameContains`<sup>Optional</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.nameContains"></a>

```typescript
public readonly nameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name_contains StackMonitoringMonitoredResourcesSearch#name_contains}.

---

##### `propertyEquals`<sup>Optional</sup> <a name="propertyEquals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.propertyEquals"></a>

```typescript
public readonly propertyEquals: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#property_equals StackMonitoringMonitoredResourcesSearch#property_equals}.

---

##### `resourceCategory`<sup>Optional</sup> <a name="resourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceCategory"></a>

```typescript
public readonly resourceCategory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_category StackMonitoringMonitoredResourcesSearch#resource_category}.

---

##### `resourceTimeZone`<sup>Optional</sup> <a name="resourceTimeZone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceTimeZone"></a>

```typescript
public readonly resourceTimeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_time_zone StackMonitoringMonitoredResourcesSearch#resource_time_zone}.

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#source_type StackMonitoringMonitoredResourcesSearch#source_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#state StackMonitoringMonitoredResourcesSearch#state}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_less_than StackMonitoringMonitoredResourcesSearch#time_created_less_than}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMonitoredResourcesSearchTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#timeouts StackMonitoringMonitoredResourcesSearch#timeouts}

---

##### `timeUpdatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeUpdatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_updated_greater_than_or_equal_to}.

---

##### `timeUpdatedLessThan`<sup>Optional</sup> <a name="timeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedLessThan"></a>

```typescript
public readonly timeUpdatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_less_than StackMonitoringMonitoredResourcesSearch#time_updated_less_than}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#type StackMonitoringMonitoredResourcesSearch#type}.

---

### StackMonitoringMonitoredResourcesSearchItems <a name="StackMonitoringMonitoredResourcesSearchItems" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesSearchItems: stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems = { ... }
```


### StackMonitoringMonitoredResourcesSearchItemsProperties <a name="StackMonitoringMonitoredResourcesSearchItemsProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesSearchItemsProperties: stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties = { ... }
```


### StackMonitoringMonitoredResourcesSearchTimeouts <a name="StackMonitoringMonitoredResourcesSearchTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourcesSearchTimeouts: stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#create StackMonitoringMonitoredResourcesSearch#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#delete StackMonitoringMonitoredResourcesSearch#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#update StackMonitoringMonitoredResourcesSearch#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#create StackMonitoringMonitoredResourcesSearch#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#delete StackMonitoringMonitoredResourcesSearch#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#update StackMonitoringMonitoredResourcesSearch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourcesSearchItemsList <a name="StackMonitoringMonitoredResourcesSearchItemsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.get"></a>

```typescript
public get(index: number): StackMonitoringMonitoredResourcesSearchItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StackMonitoringMonitoredResourcesSearchItemsOutputReference <a name="StackMonitoringMonitoredResourcesSearchItemsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.license">license</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList">StackMonitoringMonitoredResourcesSearchItemsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.resourceCategory">resourceCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems">StackMonitoringMonitoredResourcesSearchItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `license`<sup>Required</sup> <a name="license" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.properties"></a>

```typescript
public readonly properties: StackMonitoringMonitoredResourcesSearchItemsPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList">StackMonitoringMonitoredResourcesSearchItemsPropertiesList</a>

---

##### `resourceCategory`<sup>Required</sup> <a name="resourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.resourceCategory"></a>

```typescript
public readonly resourceCategory: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMonitoredResourcesSearchItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems">StackMonitoringMonitoredResourcesSearchItems</a>

---


### StackMonitoringMonitoredResourcesSearchItemsPropertiesList <a name="StackMonitoringMonitoredResourcesSearchItemsPropertiesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.get"></a>

```typescript
public get(index: number): StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference <a name="StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties">StackMonitoringMonitoredResourcesSearchItemsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMonitoredResourcesSearchItemsProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties">StackMonitoringMonitoredResourcesSearchItemsProperties</a>

---


### StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference <a name="StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResourcesSearch } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourcesSearchTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>

---



